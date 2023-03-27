import { ContactViewCard } from "../../components/ContactViewCard";
import { Header } from "../../components/Header";
import { ListContact } from "../../components/ListContact";
import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ContactViewModal } from "../../components/ContactViewModal";
import { ButtonComponent } from "../../components/ButtonComponent";
import { SignUpForm } from "../../components/SignUpForm";

export const DashboardPage = () => {
	const [windowSize, setWindowSize] = useState(0);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleResize = () => {
		setWindowSize(window.innerWidth);
	};

	window.addEventListener("resize", handleResize);

	return (
		<>
			<Header />
			<Box ml={"7px"} maxW={"1200px"} p={"77px 7px 0px"} margin={"0 auto"}>
				<Button onClick={onOpen}>Novo Contato</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Novo Contato</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<SignUpForm isNewContact={true} onClose={onClose}></SignUpForm>
						</ModalBody>
					</ModalContent>
				</Modal>
			</Box>
			<Flex
				flexDirection={{
					base: "column",
					md: "row",
				}}
				as={"main"}
				maxW={"1200px"}
				p={"15px 7px"}
				margin={"0 auto"}
			>
				<ListContact />
				{windowSize <= 767 ? <ContactViewModal /> : <ContactViewCard />}
			</Flex>
		</>
	);
};

import {
	ModalContent,
	Modal,
	ModalCloseButton,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { useContactContext } from "../../context/contactContext";
import { ContactButtonOptions } from "../ContactButtonOptions";
import { ContactInfo } from "../ContactInfo";

export const ContactViewModal = () => {
	const {
		isOpen,
		onClose,
		isEditing,
		setIsEditing,
		isShowCard,
		setIsShowCard,
	} = useContactContext();
	return (
		<>
			{isShowCard ? (
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalContent>
						<ModalCloseButton
							onClick={() => {
								setIsEditing(false);
								setIsShowCard(false);
							}}
						/>
						<ModalBody mt={"20px"}>
							<ContactInfo />
						</ModalBody>
						<ModalFooter>
							{isEditing ? "" : <ContactButtonOptions />}
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : (
				""
			)}
		</>
	);
};

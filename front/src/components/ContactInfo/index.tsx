import { Flex, Heading, Text } from "@chakra-ui/react";
import { useContactContext } from "../../context/contactContext";
import { SignUpForm } from "../SignUpForm";

export const ContactInfo = () => {
	const { contactInfo, isEditing } = useContactContext();
	return (
		<>
			{isEditing ? (
				<SignUpForm />
			) : (
				<Flex width={"100%"} flexDirection={"column"} gap={"7px"}>
					<Heading
						as={"h3"}
						overflowWrap={"anywhere"}
						fontSize={"1.7rem"}
						fontWeight={"bold"}
					>
						{contactInfo?.name || "placeholder"}
					</Heading>
					<Heading as={"h4"} fontSize={"1.4rem"} fontWeight={"medium"}>
						Email
					</Heading>
					<Text fontSize={"1.2rem"}>{contactInfo?.email || "placeholder"}</Text>
					<Heading as={"h4"} fontSize={"1.4rem"} fontWeight={"medium"}>
						Telefone
					</Heading>
					<Text fontSize={"1.2rem"}>{contactInfo?.phone || "placeholder"}</Text>
				</Flex>
			)}
		</>
	);
};

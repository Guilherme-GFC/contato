import { Flex, Text, Heading } from "@chakra-ui/react";
import { useContactContext } from "../../context/contactContext";
import { ContactButtonOptions } from "../ContactButtonOptions";
import { ContactInfo } from "../ContactInfo";

export const ContactViewCard = () => {
	const { isEditing, isShowCard } = useContactContext();
	return (
		<>
			{isShowCard ? (
				<Flex
					h={"fit-content"}
					width={"100%"}
					pos={"sticky"}
					top={"77px"}
					ml={"7px"}
					p={"10px"}
					gap={"7px"}
					flexDirection={"column"}
					justifyContent={"space-between"}
					border={"1px"}
					borderColor={"#00e604"}
					borderRadius={"4px"}
				>
					<ContactInfo />
					{isEditing ? "" : <ContactButtonOptions />}
				</Flex>
			) : (
				<></>
			)}
		</>
	);
};

import { ListItem, Button, Heading } from "@chakra-ui/react";
import { useContactContext } from "../../context/contactContext";
import { ContactViewModal } from "../ContactViewModal";
import { IContact } from "../../context/contactContext";

interface ContactListCardProp {
	el: IContact;
}

export const ContactListCard = ({ el }: ContactListCardProp) => {
	const { onOpen, setContactInfo, setIsEditing, setIsShowCard } =
		useContactContext();

	return (
		<ListItem
			key={el.id}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"space-between"}
			w={"100%"}
			minW={"290px"}
		>
			<Button
				w={"100%"}
				maxW={{ base: "100%", md: "350px" }}
				display="flex"
				justifyContent={"flex-start"}
				bg="#e2f9f0ff"
				color={"gray.800"}
				_hover={{
					background: "#fff",
					color: "#38d9a9",
				}}
				border="1px"
				borderColor="#38d9a9"
				onClick={() => {
					setContactInfo({
						name: el.name,
						email: el.email,
						phone: el.phone,
						id: el.id,
						createdAt: el.createdAt,
						updatedAt: el.updatedAt,
						deletedAt: el.deletedAt,
					});
					setIsShowCard(true);
					setIsEditing(false);
					onOpen();
				}}
			>
				<Heading
					w={"100%"}
					as={"h6"}
					size={"20px"}
					overflow={"hidden"}
					textOverflow={"ellipsis"}
					textAlign={"left"}
				>
					{el.name || "Placeholder"}
				</Heading>
			</Button>
		</ListItem>
	);
};

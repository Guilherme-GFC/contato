import { List } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useContactContext } from "../../context/contactContext";
import { api } from "../../services/api";
import { ContactListCard } from "../ContactListCard";

export const ListContact = () => {
	const { contacts, contactsList } = useContactContext();
	useEffect(() => {
		contactsList();
	}, []);

	return (
		<List display={"flex"} flexDirection={"column"} gap={"10px"}>
			ola
			{contacts?.length > 0
				? contacts.map((el) => <ContactListCard key={el.id} el={el} />)
				: ""}
		</List>
	);
};

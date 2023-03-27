import { ButtonGroup, Button } from "@chakra-ui/react";
import { useContactContext } from "../../context/contactContext";
import { ButtonComponent } from "../ButtonComponent";

export const ContactButtonOptions = () => {
	const { isEditing, setIsEditing, deleteContact } = useContactContext();

	const handleEditar = () => {
		if (isEditing) {
			console.log("salvou");
		}
		setIsEditing(!isEditing);
	};

	return (
		<ButtonGroup w={"100%"} display={"flex"} justifyContent={"space-evenly"}>
			<ButtonComponent onClick={() => handleEditar()}>Editar</ButtonComponent>
			<ButtonComponent color="red" onClick={() => deleteContact()}>
				Excluir
			</ButtonComponent>
		</ButtonGroup>
	);
};

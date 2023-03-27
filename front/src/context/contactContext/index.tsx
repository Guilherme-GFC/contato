import { useDisclosure, useToast } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export interface IContact {
	name: string;
	email: string;
	phone: string;
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	deletedAt?: null | string;
}

interface IContactContext {
	onOpen: () => void;
	onClose: () => void;
	submitLogin: (body: any) => Promise<void>;
	contactsList: () => Promise<void>;
	deleteContact: () => Promise<void>;
	submitUserRegister: (body: any) => Promise<void>;
	submitUpdateContact: (body: any) => Promise<void>;
	submitNewContact: (body: any) => Promise<void>;

	loadingContacts: boolean;
	isOpen: boolean;
	isEditing: boolean;
	isShowCard: boolean;
	isSignUp: boolean;
	contacts: IContact[];

	contactInfo: IContact | undefined;
	setContactInfo: React.Dispatch<React.SetStateAction<IContact | undefined>>;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
	setIsShowCard: React.Dispatch<React.SetStateAction<boolean>>;
	setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>;
	setContacts: React.Dispatch<React.SetStateAction<any>>;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: any) => {
	const navigate = useNavigate();
	const { isOpen, onClose, onOpen } = useDisclosure();

	const [contactInfo, setContactInfo] = useState<IContact | undefined>(
		undefined
	);
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [isShowCard, setIsShowCard] = useState<boolean>(false);
	const [isSignUp, setIsSignUp] = useState<boolean>(false);
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [loadingContacts, setLoadingContacts] = useState(true);

	const toast = useToast();

	const submitLogin = async (body: any): Promise<void> => {
		try {
			const { data } = await api.post("login", body);

			localStorage.setItem("@Contact:token", data.token);

			toast({
				title: "Logado",
				description: "Logado com Sucesso",
				status: "success",
				duration: 2000,
				isClosable: true,
			});

			navigate("/dashboard");
		} catch (error) {
			toast({
				title: "Algo deu errado",
				description: "Usuário ou senha inválido",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
		}
	};

	const submitUserRegister = async (body: any): Promise<void> => {
		try {
			await api.post("users", body);
			toast({
				title: "Usuário criado com Successo",
				status: "success",
				duration: 2000,
				isClosable: true,
			});
			setIsSignUp(false);
		} catch (error) {
			toast({
				title: "Erro",
				description: "Não foi possivel criar usuario",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
	};

	const submitUpdateContact = async (body: IContact) => {
		try {
			const token = localStorage.getItem("@Contact:token");
			await api.patch(`users/contacts/${contactInfo?.id}`, body, {
				headers: { Authorization: `Bearer ${token}` },
			});

			onClose();
			setIsEditing(false);
			setContactInfo({ ...contactInfo, ...body });
			contactsList();
			toast({
				title: "Contato Atualizado",
				description: "Atulização realizada com sucesso",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Erro",
				description: "Não foi possivel atualizar usuario",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const submitNewContact = async (body: IContact) => {
		try {
			const token = localStorage.getItem("@Contact:token");
			await api.post(`users/contacts`, body, {
				headers: { Authorization: `Bearer ${token}` },
			});
			contactsList();
			toast({
				title: "Contato Criado",
				description: "Criação de contato com sucesso",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Erro",
				description: "Não foi possivel criar novo contato",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
			console.log(error);
		}
	};

	const contactsList = async (): Promise<void> => {
		try {
			const token = localStorage.getItem("@Contact:token");
			await api
				.get("/users/contacts", {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((res) => setContacts(res.data));
			setLoadingContacts(false);
			toast({
				title: "Lista De Contatos Carregada",
				status: "info",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Erro",
				description: "Não foi possivel carregar os contatos",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
			console.log(error);
		}
	};

	const deleteContact = async (): Promise<void> => {
		setIsShowCard(false);
		try {
			const token = localStorage.getItem("@Contact:token");
			await api.delete(`/users/contacts/${contactInfo?.id}`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			onClose();
			setContactInfo(undefined);
			contactsList();
			setIsShowCard(false);
			toast({
				title: "Deleção Realizada",
				description: "Deleção de contato realizada com sucesso",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: "Erro",
				description: "Não foi possível deletar contato",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
			console.log(error);
		}
	};

	return (
		<ContactContext.Provider
			value={{
				isOpen,
				onOpen,
				onClose,
				contactInfo,
				setContactInfo,
				setIsEditing,
				isEditing,
				isSignUp,
				setIsSignUp,
				submitLogin,
				contactsList,
				contacts,
				setContacts,
				loadingContacts,
				submitUserRegister,
				submitUpdateContact,
				setIsShowCard,
				isShowCard,
				submitNewContact,
				deleteContact,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export const useContactContext = () => {
	const contextContact = useContext(ContactContext);
	return contextContact;
};

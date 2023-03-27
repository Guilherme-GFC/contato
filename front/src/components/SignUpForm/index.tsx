import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	FormHelperText,
	InputRightElement,
	Button,
	InputGroup,
	ButtonGroup,
	Box,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useContactContext } from "../../context/contactContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators/register";
import { ButtonComponent } from "../ButtonComponent";
import { ContactButtonOptions } from "../ContactButtonOptions";
import { registerContactSchema } from "../../validators/registerContact";

export const SignUpForm = ({
	isContact = true,
	isNewContact = false,
	onClose,
}: any) => {
	const {
		isEditing,
		contactInfo,
		isSignUp,
		submitUserRegister,
		submitUpdateContact,
		submitNewContact,
		deleteContact,
	} = useContactContext();

	const [isShowActive, setIsShowActive] = useState(false);
	const handleClick = () => setIsShowActive(!isShowActive);
	const schema = isContact ? registerContactSchema : registerSchema;
	const submitFunction = isContact
		? isNewContact
			? submitNewContact
			: submitUpdateContact
		: submitUserRegister;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<FormControl
			as={"form"}
			onSubmit={handleSubmit((data) => {
				submitFunction(data);
				if (isNewContact) {
					onClose();
				}
			})}
			p={isSignUp ? "77px 7px" : ""}
			display={isSignUp ? "flex" : ""}
			flexDirection={isSignUp ? "column" : "inherit"}
		>
			<FormControl isRequired isInvalid={Boolean(errors.name)}>
				<FormLabel>Nome</FormLabel>
				<Input
					type={"text"}
					defaultValue={isEditing ? contactInfo?.name : ""}
					{...register("name")}
				/>
				{errors.name ? (
					<FormErrorMessage>Error</FormErrorMessage>
				) : (
					<FormHelperText>
						{isContact ? "Digite nome do Contato." : "Digite seu nome."}
					</FormHelperText>
				)}
			</FormControl>
			<FormControl isRequired isInvalid={Boolean(errors.email)}>
				<FormLabel>Email</FormLabel>
				<Input
					type={"email"}
					defaultValue={isEditing ? contactInfo?.email : ""}
					{...register("email")}
				/>
				{errors.email ? (
					<FormErrorMessage>Email Inválido</FormErrorMessage>
				) : (
					<FormHelperText>
						{isContact ? "Digite email do Contato." : "Digite seu email."}
					</FormHelperText>
				)}
			</FormControl>
			{!isContact ? (
				<FormControl isRequired isInvalid={Boolean(errors.password)}>
					<FormLabel>Senha</FormLabel>
					<InputGroup>
						<Input
							type={isShowActive ? "text" : "password"}
							{...register("password")}
						/>
						<InputRightElement>
							<Button onClick={handleClick}>
								{isShowActive ? <ViewIcon /> : <ViewOffIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
					{errors.password ? (
						<FormErrorMessage>Senha inválida</FormErrorMessage>
					) : (
						<FormHelperText>Digite sua senha.</FormHelperText>
					)}
				</FormControl>
			) : (
				""
			)}

			<FormControl isRequired isInvalid={Boolean(errors.phone)} mb={"7px"}>
				<FormLabel>Telefone</FormLabel>
				<Input
					type={"tel"}
					placeholder={"00 91234-5678"}
					maxLength={11}
					defaultValue={isEditing ? contactInfo?.phone : ""}
					{...register("phone")}
				/>
				{errors.phone ? (
					<FormErrorMessage>Error</FormErrorMessage>
				) : (
					<FormHelperText>
						{isContact ? "Digite telefone do Contato." : "Digite seu telefone."}
					</FormHelperText>
				)}
			</FormControl>
			{!isContact ? (
				<ButtonComponent type="submit">Cadastrar</ButtonComponent>
			) : isNewContact ? (
				<Box w={"100%"} display={"flex"} justifyContent={"space-evenly"}>
					<ButtonComponent type="submit">Cadastrar</ButtonComponent>
					<ButtonComponent onClick={onClose} color={"red"}>
						Cancelar
					</ButtonComponent>
				</Box>
			) : (
				<Box w={"100%"} display={"flex"} justifyContent={"space-evenly"}>
					<ButtonComponent type="submit">Salvar</ButtonComponent>
					<ButtonComponent
						type="button"
						onClick={() => deleteContact()}
						color={"red"}
					>
						Excluir
					</ButtonComponent>
				</Box>
			)}
		</FormControl>
	);
};

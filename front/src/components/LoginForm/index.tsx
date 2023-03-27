import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	FormHelperText,
	InputGroup,
	InputRightElement,
	Button,
	Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validators/login";
import { ButtonComponent } from "../ButtonComponent";
import { useContactContext } from "../../context/contactContext";

export const LoginForm = () => {
	const { submitLogin } = useContactContext();
	const [showPass, setShowPass] = useState(false);
	const handleClick = () => setShowPass(!showPass);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	const submitData = (data: any) => {
		submitLogin(data);
	};

	return (
		<>
			<FormControl
				as={"form"}
				onSubmit={handleSubmit(submitData)}
				display={"flex"}
				pt={"77px"}
				p={"77px 7px"}
				flexDirection={"column"}
				maxW={"500px"}
				m={"0 auto"}
			>
				<FormControl isRequired isInvalid={Boolean(errors.email)}>
					<FormLabel>Email</FormLabel>
					<Input type={"email"} {...register("email")} />
					{errors.email ? (
						<FormErrorMessage>Email Invalido</FormErrorMessage>
					) : (
						<FormHelperText>Digite seu email.</FormHelperText>
					)}
				</FormControl>
				<FormControl isRequired isInvalid={Boolean(errors.password)} mb={"7px"}>
					<FormLabel>Senha</FormLabel>
					<InputGroup>
						<Input
							type={showPass ? "text" : "password"}
							{...register("password")}
						/>
						<InputRightElement>
							<Button onClick={handleClick}>
								{showPass ? <ViewIcon /> : <ViewOffIcon />}
							</Button>
						</InputRightElement>
					</InputGroup>
					{errors.password ? (
						<FormErrorMessage>Senha Invalida</FormErrorMessage>
					) : (
						<FormHelperText>Digite sua senha.</FormHelperText>
					)}
				</FormControl>
				<ButtonComponent type="submit">Entrar</ButtonComponent>
			</FormControl>
		</>
	);
};

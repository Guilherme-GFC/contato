import { Flex, Heading, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContactContext } from "../../context/contactContext";
import { ButtonComponent } from "../ButtonComponent";

export const Header = ({ signInOrUp, isHomePage = false }: any) => {
	const navigate = useNavigate();
	const { isSignUp, setIsSignUp, setContactInfo, setIsShowCard } =
		useContactContext();
	const handleSignUpLoginButton = () => {
		setIsSignUp(!isSignUp);
	};
	const logOut = () => {
		localStorage.clear();
		setContactInfo({
			name: "",
			email: "",
			phone: "",
		});
		setIsShowCard(false);
		navigate("/");
	};

	return (
		<Flex
			as={"header"}
			w={"100%"}
			align={"center"}
			justify={"center"}
			minH={"60px"}
			bgGradient={"linear(to-r, #e9fac8, #c5f6fa)"}
			boxShadow={"md"}
			pos={"fixed"}
			zIndex={"102"}
		>
			<Flex w={"100%"} maxW={"1200px"} p={"0 7px"} justify={"space-between"}>
				<Heading color={"#343a40"}>Contato</Heading>
				<ButtonComponent
					onClick={isHomePage ? handleSignUpLoginButton : logOut}
				>
					{isHomePage ? (isSignUp ? "Entrar" : "Cadastrar") : "Deslogar"}
				</ButtonComponent>
			</Flex>
		</Flex>
	);
};

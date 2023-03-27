import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { LoginForm } from "../../components/LoginForm";
import { SignUpForm } from "../../components/SignUpForm";
import { useContactContext } from "../../context/contactContext";

export const HopePage = () => {
	const { isSignUp } = useContactContext();
	const navigate = useNavigate();
	const token = localStorage.getItem("@Contact:token");

	useEffect(() => {
		if (token) navigate("/dashboard", { replace: true });
	}, []);

	return (
		<>
			<Box w="100%" h="100vh">
				<Header signInOrUp={"Cadastrar"} isHomePage={true} />
				{isSignUp ? (
					<Box maxW={"500px"} m={"0 auto"}>
						<SignUpForm isContact={false} />{" "}
					</Box>
				) : (
					<LoginForm />
				)}
			</Box>
		</>
	);
};

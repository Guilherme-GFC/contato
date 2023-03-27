import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IButtonComponentProps {
	type?: "button" | "submit" | "reset" | undefined;
	color?: string | undefined;
	onClick?: () => void;
	children: ReactNode;
}

export const ButtonComponent = ({
	type,
	color,
	onClick = () => {},
	children,
}: IButtonComponentProps) => {
	return (
		<Button
			type={type}
			onClick={() => onClick()}
			bg={color || "#38d9a9"}
			color={"#fff"}
			_hover={{
				background: "#fff",
				color: color || "#38d9a9",
			}}
			border="1px"
			borderColor={color || "#38d9a9"}
		>
			{children}
		</Button>
	);
};

import { Button } from "@chakra-ui/react";

export const ButtonComponent = ({
	type,
	color,
	onClick = () => {},
	children,
}: any) => {
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

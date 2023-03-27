import * as yup from "yup";

export const registerSchema = yup.object().shape({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().email("Digite um e-mail válido").required(),
	password: yup
		.string()
		.required("Senha obrigatória")
		.min(8, "A senha deve ter no mínimo 8 caracteres")
		.matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
		.matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
		.matches(/\d/, "Deve conter ao menos um número"),
	phone: yup
		.string()
		.required("Telefone obrigatório")
		.min(11, "Deve ter 11 digitos")
		.max(11, "Deve ter 11 digitos")
		.matches(/[0-9]/, "Deve conter somente numeros"),
});

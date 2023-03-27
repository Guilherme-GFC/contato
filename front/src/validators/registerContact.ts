import * as yup from "yup";

export const registerContactSchema = yup.object().shape({
	name: yup.string().required("Nome obrigatório"),
	email: yup.string().email("Digite um e-mail válido").required(),
	phone: yup
		.string()
		.required("Telefone obrigatório")
		.min(11, "Deve ter 11 digitos")
		.max(11, "Deve ter 11 digitos")
		.matches(/[0-9]/, "Deve conter somente numeros"),
});

import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
	createContactSchema,
	manyContactSchema,
	returnContactSchema,
} from "../schemas/contacts.schemas";

type ICreateContact = z.infer<typeof createContactSchema>;
type IReturnContact = z.infer<typeof returnContactSchema>;
type IUpdateContact = DeepPartial<ICreateContact>;
type IReturnContacts = z.infer<typeof manyContactSchema>;

export { ICreateContact, IReturnContact, IUpdateContact, IReturnContacts };

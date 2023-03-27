import { z } from "zod";
import { returnUserSchema } from "./users.schemas";

const createContactSchema = z.object({
	name: z.string().max(45),
	email: z.string().email().max(45),
	phone: z.string().min(11).max(11),
});

const returnContactSchema = createContactSchema.extend({
	id: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
	deletedAt: z.date().nullable(),
	user: returnUserSchema,
});

const manyContactSchema = returnContactSchema
	.omit({
		user: true,
	})
	.array();

const updateContactSchema = createContactSchema.partial();

export {
	createContactSchema,
	returnContactSchema,
	manyContactSchema,
	updateContactSchema,
};

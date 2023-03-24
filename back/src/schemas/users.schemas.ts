import { z } from "zod";

const userSchema = z.object({
	name: z.string().max(45),
	email: z.string().email().max(45),
	phone: z.string().min(11).max(11),
	password: z.string().max(20),
});

const userUpdateSchema = userSchema.partial();

const returnUserSchema = userSchema
	.extend({
		id: z.string(),
		createdAt: z.date().nullish(),
		updatedAt: z.date().nullish(),
		deletedAt: z.date().nullable(),
	})
	.omit({ password: true });

// const returnUserWithContacts = returnUserSchema.extend({
// 	contacts: manyContactsSchema,
// });

export {
	userSchema,
	returnUserSchema,
	userUpdateSchema,
	// returnUserWithContacts,
};

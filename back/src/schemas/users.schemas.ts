import { z } from "zod";

const userSchema = z.object({
	name: z.string().max(45),
	email: z.string().email().max(45),
	password: z.string().max(20),
	phone: z.string().min(11).max(11),
});

const userUpdateSchema = userSchema.partial();

const returnUserSchema = userSchema
	.extend({
		id: z.string(),
		createdAt: z.date(),
		updatedAt: z.date(),
		deletedAt: z.date().nullable(),
	})
	.omit({ password: true });

export { userSchema, returnUserSchema, userUpdateSchema };

import { z } from "zod";
import { DeepPartial } from "typeorm";
import { returnUserSchema, userSchema } from "../schemas/users.schemas";

type IUser = z.infer<typeof userSchema>;
type IUserReturn = z.infer<typeof returnUserSchema>;
type IUserUpdate = DeepPartial<IUser>;

export { IUser, IUserReturn, IUserUpdate };

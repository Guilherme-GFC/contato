import { Router } from "express";
import {
	createUserController,
	deleteUserController,
	retrieveUserController,
	updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureEmailNotUsedMiddleware from "../middlewares/ensureEmailNotUser.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router();

userRoutes.post(
	"",
	ensureDataIsValidMiddleware(userSchema),
	ensureEmailNotUsedMiddleware,
	createUserController
);
userRoutes.get(
	"",
	ensureAuthMiddleware,
	ensureUserExistsMiddleware,
	retrieveUserController
);
userRoutes.patch(
	"",
	ensureAuthMiddleware,
	ensureUserExistsMiddleware,
	ensureDataIsValidMiddleware(userUpdateSchema),
	updateUserController
);
userRoutes.delete(
	"",
	ensureAuthMiddleware,
	ensureUserExistsMiddleware,
	deleteUserController
);

export default userRoutes;

import { Router } from "express";
import {
	createContactController,
	deleteContactController,
	listContactsController,
	retrieveContactController,
	updateContactController,
} from "../controllers/contacts.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
	createContactSchema,
	updateContactSchema,
} from "../schemas/contacts.schemas";

const contactRoutes: Router = Router();

contactRoutes.get("", ensureAuthMiddleware, listContactsController);
contactRoutes.post(
	"",
	ensureAuthMiddleware,
	ensureDataIsValidMiddleware(createContactSchema),
	createContactController
);
contactRoutes.get("/:id", ensureAuthMiddleware, retrieveContactController);

contactRoutes.patch(
	"/:id",
	ensureAuthMiddleware,
	ensureDataIsValidMiddleware(updateContactSchema),
	updateContactController
);
contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export default contactRoutes;

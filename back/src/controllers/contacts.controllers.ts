import { Request, Response } from "express";
import createContactService from "../services/contacts/createContact.service";
import deleteContactService from "../services/contacts/deleteContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import retrieveContactService from "../services/contacts/retrieveContact.service";
import updateContactService from "../services/contacts/updateContact.service";

const createContactController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId = req.user.id;
	const contactData = req.body;
	const newContact = await createContactService(userId, contactData);
	return res.status(201).json(newContact);
};

const retrieveContactController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const contactId = req.params.id;
	const contact = await retrieveContactService(contactId);
	return res.status(200).json(contact);
};

const listContactsController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId = req.user.id;
	const contacts = await listContactsService(userId);
	return res.status(200).json(contacts);
};

const updateContactController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const contactId = req.params.id;
	const newContactData = req.body;
	const updatedContact = await updateContactService(newContactData, contactId);
	return res.status(200).json(updatedContact);
};

const deleteContactController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const contactId = req.params.id;
	await deleteContactService(contactId);
	return res.status(204).json();
};

export {
	createContactController,
	retrieveContactController,
	listContactsController,
	updateContactController,
	deleteContactController,
};

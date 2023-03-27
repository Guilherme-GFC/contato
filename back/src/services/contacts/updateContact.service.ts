import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";
import {
	IReturnContact,
	IUpdateContact,
} from "../../interfaces/contacts.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (
	newContactData: IUpdateContact,
	contactId: string
): Promise<IReturnContact> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contactData = await contactRepository.findOne({
		where: {
			id: contactId,
		},
		relations: {
			user: true,
		},
	});

	if (!contactData) {
		throw new AppError("Contact not found!", 404);
	}

	const newContact = contactRepository.create({
		...contactData,
		...newContactData,
	});

	await contactRepository.save(newContact);

	const updatedContact = returnContactSchema.parse(newContact);

	return updatedContact;
};

export default updateContactService;

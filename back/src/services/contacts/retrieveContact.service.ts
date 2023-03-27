import { Contact } from "../../entities";
import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { returnContactSchema } from "../../schemas/contacts.schemas";
import { IReturnContact } from "../../interfaces/contacts.interfaces";
import { AppError } from "../../errors";

const retrieveContactService = async (
	contactId: string
): Promise<IReturnContact> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const findContact = await contactRepository.findOne({
		where: {
			id: contactId,
		},
		relations: {
			user: true,
		},
	});

	if (!findContact) {
		throw new AppError("Contact not found!", 404);
	}

	const returnContact = returnContactSchema.parse(findContact);

	return returnContact;
};

export default retrieveContactService;

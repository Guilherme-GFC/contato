import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { Contact, User } from "../../entities";

import { returnContactSchema } from "../../schemas/contacts.schemas";
import {
	ICreateContact,
	IReturnContact,
} from "../../interfaces/contacts.interfaces";

const createContactService = async (
	userId: string,
	contactData: ICreateContact
): Promise<IReturnContact> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const findUser: User | null = await userRepository.findOneBy({
		id: userId,
	});

	const contact = contactRepository.create({
		...contactData,
		user: findUser!,
	});
	await contactRepository.save(contact);

	const returnContact = returnContactSchema.parse(contact);

	return returnContact;
};

export default createContactService;

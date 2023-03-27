import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { User } from "../../entities";

import { IReturnContacts } from "../../interfaces/contacts.interfaces";
import { manyContactSchema } from "../../schemas/contacts.schemas";

const listContactsService = async (
	userId: string
): Promise<IReturnContacts> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOne({
		where: {
			id: userId,
		},
		relations: {
			contacts: true,
		},
	});

	const returnContact = manyContactSchema.parse(user?.contacts);

	return returnContact;
};

export default listContactsService;

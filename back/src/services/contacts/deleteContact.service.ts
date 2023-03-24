import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { Contact } from "../../entities";
import { AppError } from "../../errors";

const deleteContactService = async (contactId: string): Promise<void> => {
	const contactRepository: Repository<Contact> =
		AppDataSource.getRepository(Contact);

	const contact = await contactRepository.findOne({
		where: {
			id: contactId,
		},
	});

	if (!contact) {
		throw new AppError("Contact not found", 404);
	}
	contactRepository.remove(contact!);
};

export default deleteContactService;

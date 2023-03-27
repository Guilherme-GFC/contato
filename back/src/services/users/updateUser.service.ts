import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { User } from "../../entities";
import { IUserReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (
	newUserData: IUserUpdate,
	userId: string
): Promise<IUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const userData = await userRepository.findOneBy({
		id: userId,
	});

	const user = userRepository.create({
		...userData,
		...newUserData,
	});

	await userRepository.save(user);

	const updatedUser = returnUserSchema.parse(user);

	return updatedUser;
};

export default updateUserService;

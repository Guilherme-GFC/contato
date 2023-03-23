import { Repository } from "typeorm";
import AppDataSource from "../../data.source";
import { User } from "../../entities";
import { IUserReturn } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const retriveUserService = async (userId: string): Promise<IUserReturn> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const findUser: User | null = await userRepository.findOne({
		where: {
			id: userId,
		},
	});

	const user = returnUserSchema.parse(findUser);

	return user;
};

export default retriveUserService;

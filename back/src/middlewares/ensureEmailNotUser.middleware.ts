import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data.source";
import { User } from "../entities";
import { AppError } from "../errors";

const ensureEmailNotUsedMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { email } = req.body;

	const userRepository = AppDataSource.getRepository(User);

	const user = await userRepository.findOne({
		where: {
			email,
		},
		withDeleted: true,
	});

	if (user) {
		throw new AppError("Email already used", 409);
	}

	return next();
};

export default ensureEmailNotUsedMiddleware;

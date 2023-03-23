import { Request, Response } from "express";
import { IUser, IUserUpdate } from "../interfaces/users.interfaces";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import retriveUserService from "../services/users/retrieveUser.service";
import updateUserService from "../services/users/updateUser.service";

const createUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: IUser = req.body;
	const newUser = await createUserService(userData);
	return res.status(201).json(newUser);
};

const retrieveUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: string = req.user.id;
	const user = await retriveUserService(userId);
	return res.status(200).json(user);
};

const updateUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: string = req.user.id;
	const newUserData: IUserUpdate = req.body;
	const updatedUser = await updateUserService(newUserData, userId);
	return res.status(200).json(updatedUser);
};

const deleteUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId = req.user.id;
	await deleteUserService(userId);
	return res.status(204).json();
};

export {
	createUserController,
	retrieveUserController,
	updateUserController,
	deleteUserController,
};

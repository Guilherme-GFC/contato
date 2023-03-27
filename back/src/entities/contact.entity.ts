import { Entity, ManyToOne } from "typeorm";
import { CommonInfo } from "./commonInfo.entity";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact extends CommonInfo {
	@ManyToOne(() => User)
	user: User;
}

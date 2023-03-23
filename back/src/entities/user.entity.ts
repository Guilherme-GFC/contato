import { getRounds, hashSync } from "bcryptjs";
import { Entity, Column, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import { CommonInfo } from "./commonInfo.entity";
import { Contact } from "./contact.entity";

@Entity("users")
export class User extends CommonInfo {
	@Column({ length: 120 })
	password: string;

	@OneToMany(() => Contact, (contact) => contact.user)
	contacts: Contact[];

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 7);
		}
	}
}

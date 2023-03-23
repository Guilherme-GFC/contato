import { getRounds, hashSync } from "bcryptjs";
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	OneToMany,
	BeforeInsert,
	BeforeUpdate,
} from "typeorm";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 45 })
	name: string;

	@Column({ length: 45 })
	email: string;

	@Column({ length: 120 })
	password: string;

	@Column({ length: 11 })
	phone: string;

	@CreateDateColumn()
	createdAt: string;

	@UpdateDateColumn()
	updateAt: string;

	@DeleteDateColumn()
	deletedAt: string;

	// @OneToMany( () => Contact, (contact) => contact.user)
	// contacts: Contact[]

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 7);
		}
	}
}

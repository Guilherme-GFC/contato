import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 45 })
	name: string;

	@Column({ length: 45 })
	email: string;

	@Column({ length: 11 })
	phone: string;

	@CreateDateColumn()
	createdAt: string;

	@UpdateDateColumn()
	updateAt: string;

	@DeleteDateColumn()
	deletedAt: string;

	@ManyToOne(() => User)
	user: User;
}

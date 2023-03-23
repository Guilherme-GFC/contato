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

export abstract class CommonInfo {
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
	updatedAt: string;

	@DeleteDateColumn()
	deletedAt: string;
}

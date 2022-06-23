import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: Number;
    
    @Column()
    name!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

    static findByUserName(username: string, password: string) {
        return this.createQueryBuilder("users")
            .where("users.username = :username", { username })
            .andWhere("users.password = :password", { password })
            .getOne()
    }
}
import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./User";
@Entity({
    name: "credentials"
})
export class Credentials {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 50,
        unique: true
    })
    username: string;
    @Column()
    password: string;
    
    @OneToOne(() => User, user => user.credentials, { onDelete: "CASCADE" })
    user: User
}
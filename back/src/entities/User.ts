import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credentials } from "./Credentials";
import { Turn } from "./Turn";
@Entity({
    name: "users",
})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        length: 50,
        unique: true
    })
    name: string

    @Column({
        length: 50,
        unique: true
    })
    email: string
    @Column()
    birthdate: Date
    @Column({
        length: 30,
        unique: true
    })
    nDni: string
    @OneToOne(() => Credentials, credentials => credentials.user, { onDelete: "CASCADE" })
    @JoinColumn()
    credentials: Credentials
    @OneToMany(() => Turn, (turn) => turn.user)
    turns: Turn[];
}
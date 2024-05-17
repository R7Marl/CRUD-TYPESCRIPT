import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
@Entity({
    name: 'turns'
})
export class Turn { 
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fecha: string;
    @Column()
    hora: string;
    @Column()
    status: string
    @Column()
    @ManyToOne(() => User, (user) => user.turns)
    @JoinColumn({
        name: 'userId',
    })
    user: number;
}
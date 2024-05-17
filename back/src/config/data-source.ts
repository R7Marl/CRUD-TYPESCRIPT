import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Credentials } from "../entities/Credentials";
import { Turn } from "../entities/Turn";
import dotenv from 'dotenv';
dotenv.config();
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DATABASE,
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [User, Credentials, Turn],
    migrations: [],
    subscribers: [],
})
export const UserModel = AppDataSource.getRepository(User);
export const CModel = AppDataSource.getRepository(Credentials);
export const turns = AppDataSource.getRepository(Turn);
export interface IUser {
    id?: number;
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    credentialsId?: number; // Conectado con el id de la credencial
}
export interface ICredentials {
    id?: number;
    username: string;
    password: string;
}
export interface IAppointment {
    id?: number;
    fecha: string;
    hora: string;
    status: string;
    user?: number; // Conectado al user id
} 
export interface UserCheck {
    name: string;
    email: string;
    birthdate: string;
    nDni: string;
    username: string;
    password: string;
}
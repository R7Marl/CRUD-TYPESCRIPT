import { turns } from "../config/data-source";
import { IAppointment } from "../interfaces/interfaces";
export const getAllAppoitments = async(id: number) => {
    try {
        const turnos = await turns.find({
            where: {user: id}
        });
        return turnos;
    } catch (error){
        throw "Hubo un error interno"
    }
}
export const getAppoitmentById = async(id: number) => {
   try {
    const appoitment = await turns.findOneBy({id});
    return appoitment;
   } catch {
    throw "El turno no existe"
   }
}
export const createAppoitment = async(fecha: string, time: string, userId: number) => {
    console.log(fecha, time, userId);
    const newAppoitment: IAppointment = {
        fecha: fecha,
        hora: time,
        user: userId,
        status: 'ACTIVO'
    }
    try {
        const created = await turns.create(newAppoitment);
        await turns.save(created);
        return created;
    } catch (error){
        throw "Hubo un error interno";
    }
}
export const cancelAppoitment = async(id: number) => {
    const appoitment = await getAppoitmentById(id);
    if (!appoitment) {
        throw appoitment;
    }
    const pp = await turns.update({id}, {status: 'Cancelado'});
    return pp;
}
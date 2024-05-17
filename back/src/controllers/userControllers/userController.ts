import { Request, Response } from "express";
import { serviceGetUsers, serviceGetUserById, serviceCreateUser } from "../../services/userService";
import { checkCredentials } from "../../services/credentialService";
import { catchAsync } from "../../util/catchAsync";
export const getUsers = catchAsync(async(req: Request, res: Response) => {
        const users =await serviceGetUsers();
        console.log(users);
        res.status(200).send({users});
})
export const getUsersById = catchAsync(async (req: Request, res: Response): Promise<void>=> {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        res.status(400).send("ID inválido. El ID debe ser un número.");
    }
    const user = await serviceGetUserById(id);
    res.status(200).send({ user });
});
export const registerUser = async(req: Request, res: Response) => {
    const { username, password, email, name, birthdate, nDni } = req.body;
    try {
        await serviceCreateUser(name, email, birthdate, nDni, username, password);
        res.status(201).json({message: "El usuario fue creado."});
    } catch (e) {
        console.log(e)
        if(e == "Hubo un error interno"){
            res.status(500).json({ error: "Error interno" });
        }
        res.status(400).json({ error: e});
    }
}
export const loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await checkCredentials(username, password);
        res.status(200).json({ message: {
            login: true,
            user
        }});
    } catch(e) {
        res.status(400).json({ error: e });
    }

}
import { UserModel } from "../config/data-source";
import { serviceRegistreUser } from "./credentialService";

export const serviceGetUsers = async () => {
  const users = await UserModel.find({
    relations: { turns: true},
  });
  return users;
};
export const serviceGetUserById = (id: number) => {
  try {
    const user = UserModel.findOne({
      where: { id },
      relations: { turns: true},
    })


    return user;
  } catch {
    throw "El usuario no existe"
  }
};
export const serviceCreateUser = async(
  name: string,
  email: string,
  birthdate: Date,
  nDni: string,
  username: string,
  password: string
) => {
    const credentials = await serviceRegistreUser(username, password, name, email, birthdate, nDni);
    if(credentials) {
      return credentials;
    } 
    return credentials;
  
};

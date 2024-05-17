import { CModel, UserModel } from "../config/data-source";
import { hashPassword, comparePassword } from "../config/password"; 
import { ICredentials } from "../interfaces/interfaces"; 
export const serviceRegistreUser = async (username: string, password: string, name: string, email: string, birthdate: Date, nDni: string) => {
    const user = { name, email, birthdate, nDni }; 
    const checkUser = await UserModel.findOne({
      where:[
        { name: name },
        { email: email },
        { nDni: nDni }
      ]
    });
    if(checkUser) {
      throw "User already exists"
    }
    try {
      const hashedPassword: string = await hashPassword(password);
      const credentialsData: ICredentials = { username, password: hashedPassword };
      const newCredential = await CModel.create(credentialsData);
        await CModel.save(newCredential);
        let newuser = await UserModel.findOneBy({ credentials: newCredential });
        if (!newuser) {
          newuser = UserModel.create(user);
          newuser.credentials = newCredential;
          await UserModel.save(newuser);
        }
        return newuser;
    } catch (e){
      throw "Hubo un error en interno"
    }
  };
export const checkCredentials = async (username: string, password: string) => {
  const user = await CModel.findOne({
    where: { username }
  });
  if(!user) {
    throw "El usuario no existe";
  }
    try { 
      if(user) {
        const compared = await comparePassword(password, user.password);
        if(!compared) {
          throw "El password es incorrecto";
        }
        const userInfo = await UserModel.findOne({
          where: { credentials: user },
          relations: { turns: true }
        })
        return userInfo
      }
    } catch (e){
      if(e == "El password es incorrecto") {
        throw "El password es incorrecto";
      }
      throw "Hubo un error interno"
    }
}
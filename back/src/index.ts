import  app  from './server';
import { AppDataSource } from './config/data-source';
import dotenv from 'dotenv';
dotenv.config();
AppDataSource.initialize().then(() => {
    console.log("[TYPE ORM]: Database Connected");
}).catch(error => console.log(error))
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Listenning on port ${port}`);
});
import {createConnection} from "typeorm";
import Note from "./entity/Note";

export const connection = createConnection({
     type: "mysql",     
     host: "localhost",     
     port: 3306,     
     username: "root",     
     password: "02140214",     
     database: "typeorm_test",
     entities: [
        Note  
    ],
    synchronize: true,
    logging: false
});
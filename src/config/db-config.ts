import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import NotesEntity from "src/entity/Note.entity";

const dbConfig : TypeOrmModuleOptions = {
    type : 'mysql',
    host : 'localhost',
    port : 3307,
    username : 'root',
    password : 'root',
    database : 'nest_test_db',
    entities : [ NotesEntity ],
    logging: ["error"],
    synchronize: true,
}

export default dbConfig;
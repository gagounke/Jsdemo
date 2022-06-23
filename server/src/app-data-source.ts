import { DataSource } from "typeorm"
import { Users } from './Entities/Users';


//define datasource (here mariadb database)
export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root2",
    password: "toor",
    database: "CRUDGraphql",
    logging: true,
    synchronize: false,
    entities: [Users],
})

//AppDataSource.initialize()
//    .then(() => {
//        console.log("Data Source has been initialized!")
//    })
//    .catch((err) => {
//        console.error("Error during Data Source initialization", err)
//    })

    
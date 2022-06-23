import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {schema} from "./Schema";
import cors from 'cors';
import { AppDataSource } from "./app-data-source"


//

const main = async () => {
   
    //instantiating connexion to mariadb
    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    const app = express()    
    
    // middleware declaration
    app.use(cors())
    app.use(express.json())
    app.use("/graphql",graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3002,() => {
        console.log("SERVER RUNNING ON PORT 3002")
    })
};

main().catch((err) =>{
     console.log(err);
})
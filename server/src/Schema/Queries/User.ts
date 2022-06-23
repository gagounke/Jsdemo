import{GraphQLList} from 'graphql';
import {UserType} from '../TypeDefs/User';
import { Users } from '../../Entities/Users';


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType), //Usertype Stands for the Usertype created in the User.ts file in the TypeDef folder 
    resolve() {
        return Users.find(); //Users here stands for the entity
    }
};
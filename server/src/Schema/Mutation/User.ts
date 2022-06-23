import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { MessageType } from "../TypeDefs/Messages";
import { Users } from "../../Entities/Users";





export const CREATE_USER = {
    type: UserType,
    args: {
        name : { type : GraphQLString},
        username : { type : GraphQLString},
        password : { type : GraphQLString},
    },
    async resolve(parent:any, args:any) {
        const {name,username,password} = args;
        await Users.insert({name,username,password})
        return args
    },
};
export const UPDATE_PASSWORD = {
    type: MessageType,
    args: {
        username : { type : GraphQLString},
        oldPassword : { type : GraphQLString},
        newPassword : { type : GraphQLString},
    },
    async resolve(parent:any, args: any) {
        const {username,oldPassword,newPassword} = args;
 
       const result = await Users.findOneBy({username: username,password: oldPassword});
       //const result = await Users.findOne({username: username});
       //const result = await Users.findByUserName(username,oldPassword)
       if(!result){
               throw new Error("COULD NOT FIND USER")
               console.log(result)
           }
           const userPassword = result?.password;
           
            if (oldPassword === userPassword){
                await Users.update(
                   {username: result?.username},
                   {password: newPassword}
                   )
                return {successful:true, message:"UPDATE WORKED"};
            }else{
                throw new Error("PASSWORD DO NOT MATH")
            }
                     
    //   .execute()
    //   const user = await Users.findOne({Users.userName, userName});
    //   console.log(Users)
    //   if(!user){
    //       throw new Error("USERNAME DOES NOT EXIST")
    //       console.log(user)
    //   }
    //   const userPassword = user?.password;
    //   
    //    if (oldPassword === userPassword){
    //        await Users.update(
    //           {username: user?.username},
    //           {password: newPassword}
    //           )
    //        return {successful:true, message:"UPDATE WORKED"};
    //    }else{
    //        throw new Error("PASSWORD DO NOT MATH")
    //    }
    },
}
export const DELETE_USER = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent:any, args:any) {
        const id = args.id;
        await Users.delete({id: id})
        return {successfull: true, message:"DELETE WAS SUCCESSFUL"}
    },
};


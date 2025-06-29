"use server"

import { collectionsObj, dbConnect } from "@/lib/mongodb";
import bcrypt from "bcrypt";
export const loginUser = async (payload: {email: string, password: string}) => {
    const user= await (await dbConnect(collectionsObj.users)).findOne({email: payload.email});
    if(!user) return null
    const isPassOk = bcrypt.compare(user.password, payload.password);
    if(!isPassOk) return null
    console.log(user);
    return user;
}
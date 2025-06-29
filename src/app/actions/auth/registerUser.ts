"use server";

import { collectionsObj, dbConnect } from "@/lib/mongodb";
import { OptionalId, Document } from "mongodb";
import bcrypt from 'bcrypt';
export const registerUser = async (payload: OptionalId<Document>) => {
  const usersCollection = await dbConnect(collectionsObj.users);
  
  const { email, password } = payload;
  
  if (!email || !password) return { success: false };
  
  const existingUser = await usersCollection.findOne({ email });
  
  if (existingUser === null) {
    const hashedPass = await bcrypt.hash(password, 10)
    payload.password = hashedPass;
    const date = new Date();
    const result = await usersCollection.insertOne({...payload, date: date});

    if (result.acknowledged) {
      console.log(result, payload);
        return ({
          success: true,
          acknowledged: result.acknowledged,
          insertedId: result.insertedId.toString(),
        })
      
    }

    return { success: false, message: "Insert failed" };
  }

  return { success: false, message: "User already exists" };
};

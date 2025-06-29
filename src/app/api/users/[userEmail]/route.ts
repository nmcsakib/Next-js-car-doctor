import { collectionsObj, dbConnect } from "@/lib/mongodb";

export async function GET(req: unknown, {params}: {params: {userEmail: string}}) {
    const p = await params;
    const email = p.userEmail
    console.log(email);
    const user= await (await dbConnect(collectionsObj.users)).findOne({email: email});
    return Response.json(user)

}
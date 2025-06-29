import { collectionsObj, dbConnect } from "@/lib/mongodb";

export async function GET() {
    
    const users = await (await dbConnect(collectionsObj.users)).find().toArray();
    return Response.json(users)

}
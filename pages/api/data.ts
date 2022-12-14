import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase, BD_NAME_PALIZAS } from "../../lib/mongodb";

type ApiData = {
  data: any;
  success: boolean;
};

type PalizaRequest = {
  _id: ObjectId;
  destination: number;
  date: Date;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiData>) {
  try {
    if (req.method === "GET") {
      let { id } = req.query;
      let { db } = await connectToDatabase(BD_NAME_PALIZAS);
      let conteo = await db
        .collection("encargos")
        .find({ destination: parseInt(id as string) })
        .toArray();
      return res.status(200).json({
        data: conteo.length,
        success: true,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      data: new Error(error).message,
      success: false,
    });
  }
}

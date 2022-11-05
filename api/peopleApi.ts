import { ObjectId } from "mongodb";
import { BD_NAME_PALIZAS, connectToDatabase } from "../lib/mongodb";

type ApiData = {
  data: any;
  success: boolean;
};

type PalizaRequest = {
  _id: ObjectId;
  destination: number;
  date: Date;
};

export const peopleApi = async () => {
  let { db } = await connectToDatabase(BD_NAME_PALIZAS);
  let users = await db.collection("victimas").find({}).toArray();
  return {
    data: users,
    success: true,
  };
};

export const savePaliza = async (id: number) => {
  let { db } = await connectToDatabase(BD_NAME_PALIZAS);
  let requestPaliza: PalizaRequest = {
    _id: new ObjectId(),
    destination: id,
    date: new Date(),
  };
  await db.collection("encargos").insertOne(requestPaliza);
  let conteo = await db.collection("encargos").find({ destination: id }).toArray();
  return {
    data: conteo.length,
    success: true,
  };
};

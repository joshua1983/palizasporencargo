import { MongoClient } from "mongodb";

const MONGODB_URI: string = process.env.MONGODB_URI as string;
export const BD_NAME_PALIZAS: string = process.env.DB_NAME_PALIZAS as string;

if (!MONGODB_URI) {
  throw new Error("No hay URI para MongoDB");
}

if (!BD_NAME_PALIZAS) {
  throw new Error("No hay URI para MongoDB");
}

let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase(databaseName: string) {
  if (cachedClient && cachedDb) {
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  const opts: any = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let client = new MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(databaseName);

  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}

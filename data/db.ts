import moongose from "mongoose";

const mongoConnection = {
  isConnected: false,
};

export const dbConnection = async () => {
  moongose.set("strictQuery", true);

  if (mongoConnection.isConnected) {
    console.log("Ya estabamos conectados");
  }

  try {
    await moongose.connect(process.env.MONGODB_URI as string);
    mongoConnection.isConnected = true;
    console.log("Conectado a mongoDB");
  } catch (error) {
    console.log(error);
  }
};

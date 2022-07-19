const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/testemondodb2";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Conectando ao Mongo!");
  } catch (err) {
    console.log(err);
  }
}

run();

module.exports = client;

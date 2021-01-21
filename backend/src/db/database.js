const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase() {
  const uri = "mongodb://www:8TZ2uWGi4DAaxIQP@database/inflight";
  const connection = await MongoClient.connect(uri, {useNewUrlParser: true});
  database = connection.db();
}

async function getDatabase() {
  if (!database) {
    await startDatabase();
  }
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
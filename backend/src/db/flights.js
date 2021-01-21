const { getDatabase } = require('./database');
const { ObjectID } = require('mongodb');

const collectionName = 'flights';

async function createFlight(flight) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(flight);
  return insertedId;
}

async function readFlight(id) {
  const database = await getDatabase();
  return await database.collection(collectionName).findOne({
    _id: new ObjectID(id),
  });
  return {"status":"OK"};
}

async function updateFlight(id, flight) {
  const database = await getDatabase();
  delete flight._id;
  await database.collection(collectionName).update(
    { _id: new ObjectID(id), },
    {
      $set: {...flight},
    },
  );
  return {"status":"OK"};
}

async function deleteFlight(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
  return {"status":"OK"};
}

async function getFlights() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
  createFlight,
  readFlight,
  updateFlight,
  deleteFlight,
  getFlights,
};
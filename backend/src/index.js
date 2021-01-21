const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {startDatabase} = require('./db/database');
const {createFlight, readFlight, updateFlight, deleteFlight, getFlights} = require('./db/flights');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.put('/flight/create', async (req, res) => {
  res.send(await updateFlight(req.body._id, req.body));
});

app.put('/flight/read', async (req, res) => {
  res.send(await readFlight(req.body._id));
});

app.put('/flight/update', async (req, res) => {
  res.send(await updateFlight(req.body._id, req.body));
});

app.put('/flight/delete', async (req, res) => {
  res.send(await deleteFlight(req.body._id));
});

app.get('/flight/all', async (req, res) => {
  res.send(await getFlights());
});

// Start the server
startDatabase().then(async () => {
  app.listen(3001, async () => {
      console.log('listening on port 3001');
  });
});
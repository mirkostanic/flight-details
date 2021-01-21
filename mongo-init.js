db.createUser({
  user: "www",
  pwd: "8TZ2uWGi4DAaxIQP",
  roles: [{role: "dbOwner", db: "inflight"}]
});

db.users.insert({
  name: "www"
})

db.createCollection("flights");

db.flights.insertMany([
  {
      "_id": "60034919028aa537182d66a8",
      "terminal": "T1",
      "flightCode": "LH980",
      "flightProvider": "Lufthansa",
      "sourcePortName": "Frankfurt",
      "sourcePortCode": "FRA",
      "destinationPortName": "Dublin",
      "destinationPortCode": "DUB",
      "scheduledDeparture": 1611324000000,
      "scheduledArrival": 1611331500000,
      "actualDeparture": 1611324000000,
      "actualArrival": 1611331500000,
      "status": "LANDED"
  },
  {
      "_id": "60034919028aa537182d66a9",
      "terminal": "T1",
      "flightCode": "LH2518",
      "flightProvider": "Lufthansa",
      "sourcePortName": "Munich",
      "sourcePortCode": "MUC",
      "destinationPortName": "Dublin",
      "destinationPortCode": "DUB",
      "scheduledDeparture": 1611323400000,
      "scheduledArrival": 1611332100000,
      "actualDeparture": 1611323400000,
      "actualArrival": 1611332100000,
      "status": "ON SCHEDULE"
  },
  {
      "_id": "60034919028aa537182d66aa",
      "terminal": "T1",
      "flightCode": "AY1385",
      "flightProvider": "Finnair",
      "sourcePortName": "Helsinki",
      "sourcePortCode": "HEL",
      "destinationPortName": "Dublin",
      "destinationPortCode": "DUB",
      "scheduledDeparture": 1611321000000,
      "scheduledArrival": 1611332700000,
      "actualDeparture": 1611321000000,
      "actualArrival": 1611332700000,
      "status": "ON SCHEDULE"
  },
  {
      "_id": "60034919028aa537182d66ab",
      "terminal": "T1",
      "flightCode": "FR7327",
      "flightProvider": "Ryanair",
      "sourcePortName": "Prague",
      "sourcePortCode": "PRG",
      "destinationPortName": "Dublin",
      "destinationPortCode": "DUB",
      "scheduledDeparture": 1611325200000,
      "scheduledArrival": 1611333300000,
      "actualDeparture": 1611325800000,
      "actualArrival": 1611334200000,
      "status": "DELAYED"
  },
  {
      "_id": "60034919028aa537182d66ac",
      "terminal": "T1",
      "flightCode": "FR667",
      "flightProvider": "Ryanair",
      "sourcePortName": "Birmingham",
      "sourcePortCode": "BHX",
      "destinationPortName": "Dublin",
      "destinationPortCode": "DUB",
      "scheduledDeparture": 1611329700000,
      "scheduledArrival": 1611333600000,
      "actualDeparture": 1611330300000,
      "actualArrival": 1611334500000,
      "status": "DELAYED"
  },
  {
      "_id": "60034919028aa537182d66ad",
      "terminal": "T1",
      "flightCode": "FR8512",
      "flightProvider": "Ryanair",
      "sourcePortName": "Hamburg",
      "sourcePortCode": "HAM",
      "destinationPortName": "Dublin",
      "destinationPortCode": "DUB",
      "scheduledDeparture": 1611327000000,
      "scheduledArrival": 1611333600000,
      "actualDeparture": 1611327000000,
      "actualArrival": 1611333600000,
      "status": "ON SCHEDULE"
  }
]);
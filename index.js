// implement your API here
const express = require('express');

const db = require('./data/db.js');
const server = express();

//middleware

server.use(express.json());

server.get('/db', (req, res) =>{
db.find()
  .then(db => {
      res.status(200).json(db);
  })
  .catch(err => {
      console.log('error', err);
      res.status(500).json({error: 'failed to get hubs from db'});

  });
});
const port = 8080;
server.listen(port, () => console.log('\n=== API on port 8080 ===\n'));
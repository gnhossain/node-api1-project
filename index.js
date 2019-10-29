// implement your API here
const express = require('express');
const cors = require('cors');

const db = require('./data/db.js');
const server = express();

//middleware

server.use(express.json());

server.use(cors()) ;

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

server.post('/db', (req, res) => {
    const dbInformation = req.body;
  
    console.log('db information', dbInformation);
  
    db.findById(dbInformation)
      .then(db => {
        res.status(201).json(db);
      })
      .catch(err => {
        console.log('error', err);
        res.status(500).json({ error: 'failed to add the hub to the db' });
      });
  });
  
  server.delete('/db/users/:id', (req, res) => {
    const id = req.params.id;
  
    db.remove(id)
      .then(count => {
        res.status(200).json({ message: `db with id ${id} deleted` });
      })
      .catch(err => {
        console.log('error', err);
        res.status(500).json({ error: 'failed to delete the db from the db' });
      });
  });

  server.put('/db/users/:id', (req, res) => {
    const id = req.params.id;
  
    db.update(id)
      .then(count => {
        res.status(200).json({ message: `db with id ${id} updateed` });
      })
      .catch(err => {
        console.log('error', err);
        res.status(404).json({ error: 'failed to update the db from the db' });
      });
  });
  
const port = 8080;
server.listen(port, () => console.log('\n=== API on port 8080 ===\n'));
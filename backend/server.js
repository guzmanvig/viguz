// server.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors())
//app.use(express.static(__dirname + '/static'));

app.get('/api/clients', (req, res) => {
  return db.Client.findAll()
    .then((clients) => {
      res.send(processAllClientsFromDB(clients))
      console.log("req" +JSON.stringify(req.headers))
    })
    .catch((err) => {
      console.log('There was an error querying clients', JSON.stringify(err))
      return res.send(err)
    });
});

app.post('/api/clients', (req, res) => {
  var client = {
    'firstName' : req.body.firstName,
    'order': req.body.beer1 + ";" + req.body.beer2,
    'randomId': Math.floor(Math.random() * 9999)
  }
  return db.Client.create(client)
    .then((client) => res.send(client))
    .catch((err) => {
      console.log('***There was an error creating a client', JSON.stringify(client))
      return res.status(400).send(err)
    })
});

app.delete('/api/clients/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Client.findById(id)
    .then((client) => client.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting client', JSON.stringify(err))
      res.status(400).send(err)
    })
});

/*app.put('/api/client/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return db.Client.findById(id)
  .then((client) => {
    const { firstName, orders } = req.body
    return client.update({ firstName, orders })
      .then(() => res.send(client))
      .catch((err) => {
        console.log('***Error updating client', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
});*/

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

function processClientFromDB(DBclient) {
    DBclient.order = DBclient.order.split(';')
    return DBclient; 
}

function processAllClientsFromDB(DBclients) {
  var clients = [];
  for (var i = 0; i < DBclients.length; i++) {
    clients.push(processClientFromDB(DBclients[i]));
  }
  return clients;
} 

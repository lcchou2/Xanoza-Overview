const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');
var db = mongoose.connection;
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")))
app.use('/:listingId', express.static(path.join(__dirname, '../public')))

// Post an overview listing
app.post('/overview', (req, res) => {
  db.postOne(req.body, (err) =>{
      if (err) {
          res.status(400).send(err)
      }
      res.status(200).send(req.body)
  })
});

// Retrieve all overview listings
app.get('/overview', (req,res) =>{
  db.getAll((err, data) =>{
    if (err){
      res.status(418).send(err)
      return;
    }

    res.status(200).send(data)

  })
  }
);

// Retrieve a specific overview listing
app.get('/overview/:listingId', (req,res) =>{
  db.returnListing(Number(req.params.listingId), function(err, data) {
    if (err) {
      throw (err);
    } else {
      res.send(data);
    }
  });
  }
);

// Update a listing 
app.post('/overview/:listingId', (req, res) => {
  db.updateOne(req.body,Number(req.params.listingId), (err) =>{
      if (err) {
          res.status(400).send(err)
      }
      res.status(200).send(req.body)
  })
});

// Delete a listing 
app.delete('/overview/:listingId', (req, res) => {
  db.deleteOne(req.body,Number(req.params.listingId), (err) =>{
      if (err) {
          res.status(400).send(err)
      }
      res.status(200)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

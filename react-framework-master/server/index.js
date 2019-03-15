require('newrelic');
const express = require('express');
const app = express();
const port = 80;
const path = require('path');
const db = require('../database/index.js')
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());


// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 3000')
// })



// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// app.get('/overview/:restaurantId', function (req, res) {
// 	db.collection("restaurants").find( {"id": Number(req.params.restaurantId)}).toArray(function (err, result) {
// 		if(err) {
// 			throw err;
// 		}
// 		res.send(result);
// 		console.log("==SUCCESS==")
// 	});
// })

app.get('/loaderio-64d7d7a06ca9d939e239730e1f9c3117.txt', (req,res) => {
  res.sendFile('../client/dist/loaderio-64d7d7a06ca9d939e239730e1f9c3117.txt', ()=>{
    console.log('sent')
  })
})

app.get('/loaderio-63e05c78a83130c2f6aaff6c4f155a09', (req,res) => {
  res.send('loaderio-63e05c78a83130c2f6aaff6c4f155a09')
})


app.get('/overview/:resId',  (req, res)=> {
  const id = parseInt(req.params.resId);
	db.getResInfo( id, (err, info)=> {
    if (err) {
      res.status(400)
      return;
    }

    res.status(200).send(info)
  })
})

app.get('/overview/ratings/:resId',  (req, res)=> {
  const id = parseInt(req.params.resId);
	db.getResRatings( id, (err, info)=> {
    if (err) {
      res.status(400)
      return;
    }

    res.status(200).send(info)
  })
})

app.post('/overview/ratings', (req,res)=>{
  db.addRating(req.body, (err) => {
    if (err) {
      res.status(400)
      return;
    }

    res.status(201).send(req.body)
    
  })
})

app.use('/:id', express.static(path.join(__dirname, '../client/dist')))

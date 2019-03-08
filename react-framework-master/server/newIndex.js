const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');
var db = mongoose.connection;
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")))
app.use('/:listingId', express.static(path.join(__dirname, '../client/dist')))

// Post an overview listing
// app.post('/overview', (req, res) => {
//   db.postOne(req.body, (err) =>{
//       if (err) {
//           res.status(400).send(err)
//       }
//       res.status(200).send(req.body)
//   })
// });


// Get a specific overview listing
// app.get('/overview/:listingId', (req,res) =>{
//   db.returnListing(Number(req.params.listingId), function(err, data) {
//     if (err) {
//       throw (err);
//     } else {
//       res.send(data);
//     }
//   });
//   }
// );

app.get('/overview/:restaurantId', function (req, res) {
	db.collection("restaurants").find( {"id": Number(req.params.restaurantId)}).toArray(function (err, result) {
		if(err) {
			throw err;
		}
		res.send(result);
		console.log("==SUCCESS==")
	});
})

// // Update a listing 
// app.put('/overview/:listingId', (req, res) => {
//   db.updateOne(req.body,Number(req.params.listingId), (err) =>{
//       if (err) {
//           res.status(400).send(err)
//       }
//       res.status(200).send(req.body)
//   })
// });

// // Delete a listing 
// app.delete('/overview/:listingId', (req, res) => {
//   db.deleteOne(Number(req.params.listingId), (err) =>{
//       if (err) {
//           res.status(400).send(err)
//       }
//       res.status(200)
//   })
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

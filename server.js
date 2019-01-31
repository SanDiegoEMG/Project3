const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connection to ymmDB database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ymmDB', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: 'all sorts of code up in here'
});


// LOGIN ROUTE 
app.post('/api/login', (req, res) => {
  db.User.findOne({
    email: req.body.email
  }).then(user => {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        let token = jwt.sign({ id: user._id, email: user.email }, 'all sorts of code up in here', { expiresIn: 129600 }); // Sigining the token
        res.json({success: true, message: "Token Issued!", token: token, user: user});
      } else {
        res.status(401).json({success: false, message: "Authentication failed. Wrong password."});
      }
    });
  }).catch(err => res.status(404).json({success: false, message: "User not found", error: err}));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err));
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// code to push data to species collection
const speciesSeed = [
  {
      name_latin: "Hericium erinaceus",
      name_common: "Lion's Mane",
      gestation_time: "25"
  },
  {
      name_latin: "Pleurotus ostreatus",
      name_common: "Pearl Oyster",
      gestation_time: "10"
  },
  {
      name_latin: "Pleurotus pulmonarius",
      name_common: "Italian Oyster / Brown Oyster",
      gestation_time: "10"
  },
  {
      name_latin: "Pleurotus ostreatus var columbinus",
      name_common: "Blue Oyster",
      gestation_time: "14"
  },
  {
      name_latin: "Pleurotus citrinopileatus",
      name_common: "Golden Oyster",
      gestation_time: "18"
  },
  {
      name_latin: "Pleurotus djamor",
      name_common: "Pink Oyster",
      gestation_time: "10"
  },
  {
      name_latin: "Pholiota adiposa",
      name_common: "Chestnut",
      gestation_time: "22"
  },
  {
      name_latin: "Pleurotus eringyi",
      name_common: "Royal Trumpet / King Oyster",
      gestation_time: "20"
  },
  {
      name_latin: "Lentinula edodes",
      name_common: "Shiitake",
      gestation_time: "40"
  },
  { 
      name_latin: "Pholiota nameko",
      name_common: "Nameko",
      gestation_time: "25"
  }
];

db.Species
.deleteMany({})
.then(() => db.Species.collection.insertMany(speciesSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  // process.exit(0);
})
.catch(err => {
  console.error(err);
  // process.exit(1);
});
// END seed code for species collection


//  EM CODE
// species server-to-db calls w/queries
// get json of contents from SPECIES collection
app.get("/api/species", (req, res) => {
  db.Species
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});
// create new record in SPECIES collection
app.post("/api/species", (req, res) => {
  db.Species
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// find ONE record from SPECIES using its id
app.get ("/api/species/:id", (req, res) => {
  db.Species
  .findOne({_id: req.params.id})
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// delete a record in SPECIES collection using its id
app.delete("/api/species/:id", (req, res) =>{
  db.Species
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),
// update a record in SPECIES collection using its id
app.put("/api/species/:id", (req, res) => {
  db.Species
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});


//  mothercultures server-to-db calls w/queries
// get json of contents from MOTHERCULTURES collection
app.get("/api/mothercultures", (req, res) => {
  db.Mothercultures
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// create new record in MOTHERCULTURES collection
app.post("/api/mothercultures", (req, res) => {
  db.Mothercultures
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});
// delete a record in MOTHERCULTURES collection using its id
app.delete("/api/mothercultures/:id", (req, res) =>{
  db.Mothercultures
  .findById({_id: req.params.id})
  .then(dbModel=>dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})
// update a record in MOTHERCULTURES collection using its id
app.put("/api/mothercultures/:id", (req, res) => {
  db.Mothercultures
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});


// batch server-to-db calls w/queries
// get json of contents from BATCH collection
app.get("/api/batch", (req, res) => {
  db.Batch
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});
// create new record in BATCH collection
app.post("/api/batch", (req, res) => {
  db.Batch
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});
// delete a record in BATCH collection using its id
app.delete("/api/batch/:id", (req, res) =>{
  db.Batch
  .findById({_id: req.params.id})
  .then(dbModel=>dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})
// update a record in BATCH collection using its id
app.put("/api/batch/:id", (req, res) => {
  db.Batch
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});


// ADMIN server-to-db calls w/queries
// get json of contents from ADMIN collection
app.get("/api/admin", (req, res) => {
  db.Admin
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});
// create new record in ADMIN collection
app.post("/api/admin", (req, res) => {
  db.Admin
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});
// delete a record in ADMIN collection using its id
app.delete("/api/admin/:id", (req, res) =>{
  db.Admin
  .findById({_id: req.params.id})
  .then(dbModel=>dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});
// update a record in ADMIN collection using its id
app.put("/api/admin/:id", (req, res) => {
  db.Admin
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// END EM CODE

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

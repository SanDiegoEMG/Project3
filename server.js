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

const batchSeed = [
  {
    batchNum: 11,
    bagNum: 20,
    species: "Red Oyster",
    bagSize: 10,
    growthStage: 5,
    uniqueID: 2019020420
  }
]

const speciesSeed = [
  {
      name_latin: "Hericium erinaceus",
      name_common: "Lion's Mane",
      name_call: "lions",
      gestation: 15,
      imageUrl: "/assets/images/lions-mane.jpg",
      description: "Lion's Mane gets attention because of its appearance, but it wins hearts because of its taste and oh-so-good-for-you nutrition",
      recipes: ["http://www.sugardetox.me/recipe/sauteed-lions-mane-mushroom/", "http://www.randwich.es/blog/2015/10/19/pan-fried-lions-mane-mushroom", ],
      fun_facts: ["Believed to stimulate nerve growth enough to improve minor cognitive impairment, Lion's Mane is considered a gourmet and medicinal species", "One of the more interesting types of edible mushrooms, in place of the traditional mushroom cap is a large clump of 'teeth', which range from a few millimeters to a centimetermeter long. Shaved off and cooked on their own, these 'teeth' taste remarkably like delicate crab", "Most commonly found on dead and decaying hardwood logs throughout North America in the fall." ],
      grows_on: "Grows best on hardwood sawdust supplement with 10-20% wheat bran."
  },
  {
      name_latin: "Pleurotus ostreatus",
      name_common: "Pearl Oyster",
      name_call: "pearl",
      gestation: 20,
      imageUrl: "/assets/images/pearl-oyster.jpg",
      description: "Pearl Oyster is a well-loved, popular cultivar that is suspiciously missing from the american culinary tradition",
      recipes: ["https://www.allrecipes.com/recipe/247435/oyster-mushroom-pasta/?internalSource=hub%20recipe&referringContentType=Search", "https://juliasalbum.com/oyster-mushrooms-garlic-and-green-onions-saute-paleo-gluten-free/"],
      fun_facts: ["Throughout the world, pearl oyster mushrooms are the most common of the oyster mushrooms used by chef's.", "During the growing process, the more light introduced, the more white pearly color this species' caps will become.",  "Pleurotus ostreatus grow naturally all over the globe. It 'throws off' various sub strains including the Blue Oyster Mushroom (pleurotus columbinus).", "Oyster mushrooms are naturally high in lovastatin, a drug approved by the FDA for lowering `bad` cholesterol and raising `good` cholesterol. Higher concentrations of lovastatin are in the caps then the stems, more concentrated on the mature gills, and especially in the spores." ],
      grows_on: "Wide range of substrates including straw (wheat | rye | oat | rice | | barley straw), corn, coffee grounds, banana plant & fruit waste, most hardwoods & hardwood by-products (sawdust | paper), compost & more!"
  },
  {
      name_latin: "Pleurotus djamor",
      name_common: "Pink Oyster",
      name_call: "pink",
      gestation: 15,
      imageUrl: "/assets/images/pink-oyster.jpg",
      description: "Pink Oyster is a tropical pleurotus species that is beautiful and tasty",
      recipes: ["https://espressomushroom.co.uk/hot-pink-oyster-mushroom-saute", "https://www.giverecipe.com/fried-oyster-mushroom/", "https://www.finecooking.com/recipe/rustic-bread-stuffing-with-dried-cranberries-hazelnuts-oyster-mushrooms"],
      fun_facts: ["Pink oyster mushrooms contain fiber, potassium, copper, riboflavin, vitamin B6, folate and ergothioneine - an antioxidant that may reduce instances of cardiovascular disease by helping to prevent plaque build-up in the arteries. ", "Also known as the Salmon oyster, Flamingo oyster, and the Strawberry oyster, Pink Flamingo oyster mushrooms grow on hardwood trees and are native to tropical regions around the world.", "These mushrooms have a very short shelf life making them difficult to be sold in supermarkets, so they are predominately found at farmers markets"],
      grows_on: "Generally grown in warm weather climates on straw | sawdust | wood | paper | hay"
  },
  {
      name_latin: "Pleurotus eringyi",
      name_common: "King Oyster",
      name_call: "king",
      gestation: 20,
      imageUrl: "/assets/images/king-oyster.jpg",
      description: "King Oyster is a hearty mushroom prized in the culinary world for its versatility",
      recipes: ["https://omnivorescookbook.com/recipes/teriyaki-king-oyster-mushroom", "https://www.cooksillustrated.com/how_tos/6059-king-oyster-mushrooms"],
      fun_facts: ["Unlike other oyster varieties, the King Oyster doesn’t usually produce a shelf like formation, but instead produces a mushroom with a round cap and a defined stem. The stem is highly desired for culinary uses.", "If grown indoors with minimal fresh air and low light levels, the mushroom will grow a fat tall stem and a tiny cap, while lots of fresh air and light will produce a mushroom with a small stem and large dark cap.","Can be found growing from the roots of hardwood trees, emerging from underneath the soil, in Southern Europe | North Africa | Central Asia | Russia." ],
      grows_on: "Grows best on sterilized supplemented hardwood sawdust supplemented with 10-15% wheat bran. Will also grow well on straw, however unlike other Oyster species, the yield will be reduced."
  }
];

db.Species
.deleteMany({})
.then(() => db.Species.collection.insertMany(speciesSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
});
// END seed code


db.Batch
.deleteMany({})
.then(() => db.Batch.collection.insertMany(batchSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
})
.catch(err => {
  console.error(err);
});


// back-end api routes for species collection
// get json of all documents in Species collection
app.get("/api/species", (req, res) => {
  db.Species
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one species by id
app.get("/api/species/:id", (req, res) =>{
  db.Species
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// create new species document
app.post("/api/species", (req, res) => {
  db.Species
    .create(req.body)
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// get one document in SPECIES collection using its id
app.get("/api/species/:id", (req, res) =>{
  db.Species
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// update a document in SPECIES collection using its id
app.put("/api/species/:id", (req, res) =>{
  db.Species
  .findOneAndUpdate({_id: req.params.id}, req.body)
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

// get json of all documents in Batch collection
app.get("/api/batch", (req, res) => {
  db.Batch
    .find({})
    .then(datafoo => res.json(datafoo))
    .catch(err => res.status(400).json(err));
});

// BATCH ROUTE
app.post('/api/batch', (req, res) => {
  console.log(req.body);
  db.Batch
  .create(req.body)
  .then(dbBatch => res.json(dbBatch))
  .catch(err => res.status(400).json(err));
});

// update a document in BATCH collection using its id
app.put("/api/batch/:id", (req, res) =>{
  db.Batch
  .findOneAndUpdate({_id: req.params.id}, req.body)
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),

// delete a record in BATCH collection using its id
app.delete("/api/batch/:id", (req, res) =>{
  db.Batch
  .findById({_id: req.params.id})
  .then(datafoo=>datafoo.remove())
  .then(datafoo => res.json(datafoo))
  .catch(err => res.status(422).json(err));
}),


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

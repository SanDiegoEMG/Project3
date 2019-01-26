const mongoose = require("mongoose");
const db = require("../models");

// STARTER CODE NOT FULLY DEVELOPED - adapted form 09-stu_AJAXBooks
    mongoose.connect(
      process.env.MONGODB_URI ||
      "mongodb://localhost/youmemushroomsdb"
    );

    const mushTypes = [
      {
        name_latin: "pleurotus pulminarus",
        name_common: "pearl oyster",
        image: 'href: "#"',
      },
      {
        name_latin: "hericium erinaceous",
        name_common: "lion's mane",
        image: 'href: "#"',
      },
    ];

    db.Mushrooms
      .remove({})
      .then(() => db.Mushrooms.collection.insertMany(mushTypes))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });

  // END STARTER CODE

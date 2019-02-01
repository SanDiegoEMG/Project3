const path = require("path");
const router = require("express").Router();
const speciesRoutes = require("./species");
const batchRoutes = require("./batch");
const motherculturesRoutes = require("./mothercultures");
const adminRoutes = require("./admin");

// Species routes
router.use("/species", speciesRoutes);

// Batch routes
router.use("/batch", batchRoutes);

// Mothercultures routes
router.use("/mothercultures", motherculturesRoutes);

// Admin routes
router.use("/admin", adminRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

const router = require("express").Router();
const speciesController = require("../../controllers/speciesController");

// Matches with "/api/species"
router.route("/")
  .get(speciesController.speciesFindAll)
  .post(speciesController.createSpecies);

// Matches with "/api/species/:id"
router
  .route("/:id")
  // .get(speciesController.findById)
  .put(speciesController.updateSpecies)
  .delete(speciesController.removeSpecies);

module.exports = router;

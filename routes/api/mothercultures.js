const router = require("express").Router();
const motherculturesController = require("../../controllers/motherculturesController");

// Matches with "/api/mothercultures"
router.route("/")
  .get(motherculturesController.motherculturesFindAll)
  .post(motherculturesController.createMothercultures);

// Matches with "/api/mothercultures/:id"
router
  .route("/:id")
  // .get(motherculturesController.findById)
  .put(motherculturesController.updateMothercultures)
  .delete(motherculturesController.removeMothercultures);

module.exports = router;

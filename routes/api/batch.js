const router = require("express").Router();
const batchController = require("../../controllers/batchController");

// Matches with "/api/batch"
router.route("/")
  .get(batchController.batchFindAll)
  .post(batchController.createBatch);

// Matches with "/api/batch/:id"
router
  .route("/:id")
  // .get(batchController.findById)
  .put(batchController.updateBatch)
  .delete(batchController.removeBatch);

module.exports = router;

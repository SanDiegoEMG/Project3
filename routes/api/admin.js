const router = require("express").Router();
const adminController = require("../../controllers/adminController");

// Matches with "/api/admin"
router.route("/")
  .get(adminController.adminFindAll)
  .post(adminController.createAdmin);

// Matches with "/api/admin/:id"
router
  .route("/:id")
  // .get(adminController.findById)
  .put(adminController.updateAdmin)
  .delete(adminController.removeAdmin);

module.exports = router;

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route("/").get(getBootcamps).post(protect, createBootcamp);
// router.route('/').get(getBootcamps) = explicitly included with /:id route
router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;

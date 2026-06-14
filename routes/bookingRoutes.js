const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.post("/add", bookingController.addBooking);
router.get("/get", bookingController.getAllBookings);
router.delete("/delete/:id", bookingController.deleteBooking);
router.put("/update/:id", bookingController.updateBooking);

module.exports = router;

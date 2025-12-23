const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const bookingController = require("../controllers/booking.controller");

// GET my bookings
router.get("/my", auth, bookingController.myBookings);

// CREATE booking
router.post("/create", auth, bookingController.createBooking);

module.exports = router;

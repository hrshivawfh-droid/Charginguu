const Booking = require("../models/Booking");

// ✅ GET My Bookings
exports.myBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });

    res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
};

// ✅ CREATE Booking
exports.createBooking = async (req, res) => {
  try {
    const { location, chargerType } = req.body;

    const booking = new Booking({
      userId: req.user.id,
      bookingId: "BKG-" + Date.now(),
      location,
      chargerType,
    });

    await booking.save(); // 🔥 REAL SAVE TO MONGODB

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Booking creation failed",
    });
  }
};

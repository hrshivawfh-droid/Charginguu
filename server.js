// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// DB connection
const connectDB = require("./config/db");

// Error handler
const errorHandler = require("./middleware/error.middleware");

// Routes
const profileRoutes = require("./routes/profile.routes");
const bookingRoutes = require("./routes/booking.routes");
const paymentRoutes = require("./routes/payment.routes");
const preferenceRoutes = require("./routes/preference.routes");
const referralRoutes = require("./routes/referral.routes");
const supportRoutes = require("./routes/support.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

/* =========================
   DATABASE CONNECTION
========================= */
connectDB(); // ✅ MongoDB connected ONCE (via mongoose)

/* =========================
   MIDDLEWARES
========================= */
app.use(cors());
app.use(express.json());

// Serve profile images
app.use("/uploads", express.static("uploads"));

/* =========================
   ROUTES
========================= */
app.use("/api/user", profileRoutes);            // Profile APIs
app.use("/api/user/preferences", preferenceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/referrals", referralRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/auth", authRoutes);

/* =========================
   ERROR HANDLER
========================= */
app.use(errorHandler);

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

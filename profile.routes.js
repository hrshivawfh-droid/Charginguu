// routes/profile.routes.js
const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const {
  getProfile,
  updateProfile,
} = require("../controllers/profile.controller");

// Get Profile
router.get("/:id", getProfile);

// Update Profile + Image
router.put("/:id", upload.single("profileImage"), updateProfile);

module.exports = router;

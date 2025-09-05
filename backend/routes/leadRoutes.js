const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
    addLead,
    getLeads,
    getSummary,
    updateLead,
    deleteLead,
} = require("../controllers/leadController");

// Multer storage for image upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) =>
        cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), addLead);
router.get("/", getLeads);
router.get("/summary", getSummary);
router.put("/:id", upload.single("image"), updateLead);
router.delete("/:id", deleteLead);

module.exports = router;

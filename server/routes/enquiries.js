import express from "express";
import Enquiry from "../models/Enquiry.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json({ message: "आपली चौकशी नोंदवली आहे.", enquiry });
  } catch {
    res.status(400).json({ message: "कृपया माहिती तपासा." });
  }
});

router.get("/", auth, async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  res.json(enquiries);
});

router.patch("/:id/status", auth, async (req, res) => {
  const enquiry = await Enquiry.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(enquiry);
});

export default router;

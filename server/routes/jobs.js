import express from "express";
import Job from "../models/Job.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const jobs = await Job.find().sort({ date: -1, createdAt: -1 });
  res.json(jobs);
});

router.post("/", auth, async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch {
    res.status(400).json({ message: "Could not create job" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
});

export default router;

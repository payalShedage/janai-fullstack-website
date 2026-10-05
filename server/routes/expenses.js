import express from "express";
import Expense from "../models/Expense.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1, createdAt: -1 });
  res.json(expenses);
});

router.post("/", auth, async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch {
    res.status(400).json({ message: "Could not create expense" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

export default router;

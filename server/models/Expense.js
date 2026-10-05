import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, trim: true, default: "इतर" },
    date: { type: Date, required: true },
    amount: { type: Number, required: true, min: 0 },
    notes: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Expense", expenseSchema);

import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    service: {
      type: String,
      enum: ["विहिरीतील गाळ काढणे", "शेततळे साफसफाई", "मशीन भाड्याने", "इतर"],
      default: "विहिरीतील गाळ काढणे"
    },
    date: { type: Date, required: true },
    amount: { type: Number, required: true, min: 0 },
    notes: { type: String, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);

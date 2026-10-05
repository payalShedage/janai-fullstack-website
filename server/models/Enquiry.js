import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, trim: true },
    status: { type: String, enum: ["नवीन", "संपर्क केला", "पूर्ण"], default: "नवीन" }
  },
  { timestamps: true }
);

export default mongoose.model("Enquiry", enquirySchema);

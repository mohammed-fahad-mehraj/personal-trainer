import { Router } from "express";
import { db } from "../db";
import { enquiries } from "@shared/schema";

const router = Router();

/**
 * POST /api/enquiries
 * Saves enquiry form data to database
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await db.insert(enquiries).values({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Enquiry error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;

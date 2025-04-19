const Application = require("../models/ApplicationSchema");

exports.createApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      countryCode,
      phone,
      inquiry,
      workExp,
      age,
      gender,
      location,
      education,
      occupation,
      goals,
      priorKnowledge,
      reasonForJoining,
      languagePreference,
      learningMode,
      hasLaptopOrSmartphone,
      hasInternetAccess,
      additionalNotes,
      referralSource,
      preferredInstructorGender
    } = req.body;

    // Pass the user ID from the authenticated user (extracted in authMiddleware)
    const newApp = new Application({
      user: req.user._id, // Ensure that user is an ObjectId
      fullName,
      email,
      countryCode,
      phone,
      inquiry,
      workExp,
      age,
      gender,
      location,
      education,
      occupation,
      goals,
      priorKnowledge,
      reasonForJoining,
      languagePreference,
      learningMode,
      hasLaptopOrSmartphone,
      hasInternetAccess,
      additionalNotes,
      referralSource,
      preferredInstructorGender
    });

    await newApp.save();

    return res.status(201).json({
      status: "success",
      message: "✅ Application submitted successfully!",
      application: newApp
    });
  } catch (error) {
    console.error("Application Creation Error:", error);
    return res.status(400).json({
      status: "error",
      message: `❌ Failed to submit application: ${error.message}`
    });
  }
};

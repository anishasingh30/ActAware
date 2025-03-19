const Application = require("../models/ApplicationSchema");

exports.createApplication = async (req, res) => {
  try {
    const { countryCode, phone, inquiry, workExp } = req.body;
    const newApp = new Application({ countryCode, phone, inquiry, workExp });
    await newApp.save();
    return res.status(201).json({ message: "Application submitted successfully", application: newApp });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

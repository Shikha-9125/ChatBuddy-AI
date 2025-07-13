// server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const API_KEY = "your API_KEY";
const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-002:generateContent?key=" + API_KEY;




app.post("/ask", async (req, res) => {
  const userQuestion = req.body.question;

  try {
    const response = await axios.post(API_URL, {
      contents: [
        {
          parts: [{ text: userQuestion }]
        }
      ]
    });

    const answer = response.data.candidates[0].content.parts[0].text;
    res.json({ answer });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching response from Gemini API" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

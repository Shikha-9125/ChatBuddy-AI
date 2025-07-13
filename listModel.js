const axios = require("axios");

const API_KEY = "AIzaSyCADod7jbrRcsNSP2FDf0NAEJGLbFoQr1U"; // put your real API key here

const API_URL = `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`;

(async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("Available models:");
    console.log(JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error(
      "Error listing models:",
      JSON.stringify(error.response?.data || error.message, null, 2)
    );
  }
})();

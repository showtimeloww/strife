const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


app.get("/health", (req, res) => {
  res.status(200).send("OK");
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
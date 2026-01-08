const express = require("express");

const app = express();
const PORT = 8909;

app.get("/", (req, res) => {
  res.send("🚀 Node.js app is running inside Docker!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

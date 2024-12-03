const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html as the default file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
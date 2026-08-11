const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "backend",
    message: "ZEDA Mini backend is running"
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Siddardha"
    },
    {
      id: 2,
      name: "ZEDA Student"
    }
  ]);
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from ZEDA Mini Backend!"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on port ${PORT}`);
});

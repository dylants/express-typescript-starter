import express from "express";

const app = express();
const port = 3000;

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}`);
});

import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.resolve(path.dirname(""))));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(path.dirname(""), "./index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

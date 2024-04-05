import express from "express";

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(200);
});

app.put("/update", (req, res) => {
  res.sendStatus(200);
});

app.delete("/delete", (req, res) => {
  res.sendStatus(200);
});

app.patch("/patch", (req, res) => {
  res.sendStatus(200);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

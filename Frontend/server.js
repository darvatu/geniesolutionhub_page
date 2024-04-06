import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // add a body to req
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIdAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true })); //parse url-encoded data in req.body object

function passwordCheck(req, res, next) {
  if (req.body.password === "zxcv") {
    userIdAuthorised = true;
    console.log("Password is :" + req.body.password);
    next();
  } else {
    res.send("Incorrect password");
  }
}

//serve static files from the main directory to serve the index.html file. good care to include the css and components folders
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/login", passwordCheck, (req, res) => {
  if (userIdAuthorised) {
    res.sendFile(__dirname + "/public/index.html");
  } else {
    res.sendFile(__dirname + "/public/login.html");
    // or res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const { request } = require("express");
const express = require("express");
const server = express();
const PORT = 6003;
const connectDB = require("./DB/connectDB");
const Images = require("./models/Image.js");
connectDB();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.get("/", async (request, response) => {
  // const images = [
  //   {
  //     title: "bacelone",
  //     source: "https://www.docplanner.com/images/warsaw.png",
  //   },
  //   { title: "warsaw", source: "https://www.docplanner.com/images/warsaw.png" },
  //   { title: "warsaw", source: "https://www.docplanner.com/images/warsaw.png" },
  // ];
  const images = await Images.find();
  console.log(images);
  response.render("pages/index.ejs", { images });
});
server.post("/", async (request, response) => {
  console.log(request.body);
  // response.send(request.body);
  // Images.create(request.body);
  const { title, source, description, link } = request.body;
  Images.create({ title, source, description, link });
  response.redirect("/");
});
server.get("/name", (request, response) => {
  const name = "sami";
  // const images = [{title:"warsaw", source:"https://www.docplanner.com/images/warsaw.png"}]
  response.render("pages/test.ejs", { name });
});
server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`server is runing on ${PORT}`);
  }
});

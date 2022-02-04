const { request } = require("express");
const express = require("express");
const server = express();
const PORT = 6003;


server.set("view engine", "ejs" )
server.get("/", (request,response)=>{
    const images = [{title:"bacelone", source:"https://www.docplanner.com/images/warsaw.png"},{title:"warsaw", source:"https://www.docplanner.com/images/warsaw.png"},{title:"warsaw", source:"https://www.docplanner.com/images/warsaw.png"}]
    response.render("pages/index.ejs", {images})

})
server.get("/name", (request,response)=>{
    const name = "sami"
    // const images = [{title:"warsaw", source:"https://www.docplanner.com/images/warsaw.png"}]
    response.render("pages/test.ejs",{name})

})

server.listen(PORT, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`server is runing on ${PORT}`);
    }
  });
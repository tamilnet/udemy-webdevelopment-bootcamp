
const { response } = require("express");
const express= require("express");

const app= express();

app.get("/", function(req, res){
  res.send("<h1>Hello, there!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at: prabha@gmail.com");
});

app.get("/about", function(req, res){
  res.send("I am a Full Stack Developer. Looking forward to learn more.");
});

app.listen(3000, function(){
  console.log("Server started running on port 3000");
});

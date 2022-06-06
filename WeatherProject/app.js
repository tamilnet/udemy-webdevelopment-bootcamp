
const express = require("express");

const https = require("https");

const fs = require("fs");

const app = express();

const openWeatherAPIKey= fs.readFileSync(__dirname + "/secrets.json" ,"utf8");

app.get("/" , function(req , res){

  

  const url = "https://api.openweathermap.org/data/2.5/weather?city.name=chennai&appid="+openWeatherAPIKey+"&units=metric&lat=12.8833799&lon=80.131692" ;

  https.get(url , function(response){

    console.log(response);

  })

res.send("Server is up and running.");

});








app.listen(3000 , function(){

console.log("Server started running on port 3000.");

});
const express = require("express");

const https = require("https");

const fs = require("fs");

const bodyParser = require("body-parser");

const app = express();

const secretContent = fs.readFileSync(__dirname + "/secret.json", "utf8");

const secretObject = JSON.parse(secretContent);
const openWeatherAPIKey = secretObject.open_weather_api_key;
  

app.use(bodyParser.urlencoded({
  extended: true
}));



  


app.get("/", function (req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {

  

  const latitude = req.body.Lat;

  const longitude = req.body.Lon;

  console.log(latitude);
  console.log(longitude);

  const url = "https://api.openweathermap.org/data/2.5/weather?&appid=" + openWeatherAPIKey + "&units=metric&lat=" + latitude + "&lon=" + longitude;

  https.get(url, function (response) {

    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(temp);
      console.log(weatherDescription);

      res.write("<p>The weather is currently " + weatherDescription + "</p>");

      res.write("<h1>The temperature in your city is " + temp + " degrees celsius.</h1>");

      res.write("<img src=" + imageURL + ">");

      res.send();

    });

  });




});









app.listen(3000, function () {

  console.log("Server started running on port 3000.");

});
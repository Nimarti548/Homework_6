const cityInput = $("#cityInput");
const searchBtn = $("#citySearchBtn");

$("form").on("submit", function(e){
  e.preventDefault()
    //create a list item to append
    let input= cityInput.val();
    let srchItem = $("<li>")
    srchItem.attr("style", "border: solid; border-width: thin;")
    srchItem.text(input)
    $("#citySrchHistory").prepend(srchItem)
    
    getCurrentWeather(input);
    
  })


function getCurrentWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b96b52626f78508367acbb00dd591cd2`)
      .then(response => response.json())
      .then(data => {
        //fill html elements with response.data
        let iconImg = data.weather[0].icon;
        let currentDay = moment(data.dt_txt).format("L");
          $("#info").text(data.name + " " + currentDay)
          $("#icon1").attr("src", "https://openweathermap.org/img/w/" + iconImg + ".png")
          $("#temperature").text("Temp: " +data.main.temp + " F")
          $("#feelsLike").text("Feels Like: " + data.main.feels_like + " F")
          $("#humidity").text("Humidity: " + data.main.humidity + "%")
          $("#windSpeed").text("Wind Speed: " + data.wind.speed + "Mph")
          // call other functions
        getForecast(city);
        getUVIndex(data.coord.lat, data.coord.lon)
        })
        
}
// function that retrieves the forcast from the api and a for loop to loop through the data
function getForecast(city){
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=b96b52626f78508367acbb00dd591cd2`)
    .then(response => response.json())
    .then(data => {
      $("#dataRow").empty();
      for (let i = 0; i < data.list.length; i+= 8){
        dataCard(data.list[i]);
      }
    })
  }
  //function that retrieves the uv index from api and conditional to differenciate levels of uv exposure
  function getUVIndex(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=b96b52626f78508367acbb00dd591cd2`)
    .then(response => response.json())
    .then(data => {
      $("#uvIndex").text(data.value);
      if (data.value <= 4){
        $("#uvIndex").attr("style", "background-color: Green; color: White; width: 35px;");//Favorable
      } else if (data.value <= 6) {
        $("#uvIndex").attr("style", "background-color: Yellow; color: Black; width: 35px;");//Moderate
      }  else if (data.value <= 10) {
        $("#uvIndex").attr("style", "background-color: Red; color: White; width: 35px;");//Severe
      } 
    })
  }

  let dataCard = function (data){
    //created tags for the information in the card
    let iconImg = data.weather[0].icon;
    let card = $("<div>");
    let head = $("<h4>");
    let body = $("<div>");
    let icon = $("<img>");
    let temp = $("<p>");
    let humidity = $("<p>");
    // added classes to those tags with some styles
    card.attr("style", "width: 160px; margin: 10px; border: solid; background-color: blue; border-radius: 10px;")
    icon.attr("src", "https://openweathermap.org/img/w/" + iconImg + ".png")
    body.attr("style", "color: white;")
    body.addClass("daily-forcast");
    head.addClass("days");
    // added text to those tags
    head.text(moment(data.dt_txt).format("L"));
    temp.text("Temp: " + data.main.temp + " F");
    humidity.text("Humidity: " + data.main.humidity + "%");
    
    // appended all the tags so they can build the card 
    body.append(head);
    body.append(icon);
    body.append(temp);
    body.append(humidity);
    card.append(body);
    $("#dataRow").append(card);
}
  



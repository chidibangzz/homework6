$(document).ready(function () {
    // searching id button onclick event along with prevent deafualt
    //submit 
    $("#search-button").on("click", function (event) {
        event.preventDefault();

    
        //setting the value my form element which has an id of "search-term" and labeling it searchValue
        
        //putting the whatever the user types in in an empty string 
     
       console.log("searchbuttonclicked");
       //searchWeather is given by jquery to find the current weather and were attaching it to the value 
       //that the user types in which is called searchValue
       //my function is being called here
       searchWeather();
    
    })
    
   
    function searchWeather() {
        var searchValue = $("#search-term").val();
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=9eb51aba9e5654b6e1bc5b9934efaba8&units=imperial";

        var futureQueryURL = "http:api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=9eb51aba9e5654b6e1bc5b9934efaba8&units=imperial"

        $.ajax({
            //specifies the type of request from the ajax
            
            //attaching searchVal and api key which we just created and here we are spefiying the request
            url: queryURL,
            method: "GET"
    
            //just grabbing values from ajax here than console logged it
        }) .then( function (response) {
            //local storage
            

            console.log(response);
            //grabs the name of the city
            response.name
            //grabbing temperature
            response.main.temp
            //grabbing humidity
            response.main.humidity
            //grabbing wind speed
            response.wind.speed
            console.log(response.name);
            //its 0 becuase its the first index and the only item
            response.weather[0].icon;
            //appending items inside parrent container
            //template notation, doing javascript
            //$ curly brackets is grabbing information from jquery and insert it in html code
            

            $(".current").append(`<div>${response.name}</div>`); 
            $(".current").append(`<div>Temp: ${response.main.temp}</div>`);
            $(".current").append(`<div>Humidity: ${response.main.humidity}</div>`);
            $(".current").append(`<div>Wind Speed: ${response.wind.speed}</div>`);
            $(".current").append(`<img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
            

            //create ajax for uv index  the query url will be diff becuase grabb
            //ajax and forecast ajax
            var dataQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=9eb51aba9e5654b6e1bc5b9934efaba8&lat=" + response.coord.lat + "&lon=" + response.coord.lon;

            $.ajax({
                //specifies the type of request from the ajax
                
                //attaching searchVal and api key which we just created and here we are spefiying the request
                url: dataQueryURL,
                method: "GET"
            })
            response.coord.lon
            response.coord.lat
            
            
             
            //ajax for future forecast

            


            $.ajax({
                    //specifies the type of request from the ajax
                    
                    //attaching searchVal and api key which we just created and here we are spefiying the request
                    url: dataQueryURL,
                    method: "GET"
                })
                .then(function (response) {

                    var currentUV = $(".current").append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
                    currentUV.addClass("UV");
                    currentTemp.append(currentUV);
                    // currentUV.append("UV Index: " + response.value);

                    var local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount + 1;

            })
        }); 




        $.ajax({
            url: futureQueryURL,
            method: "GET"
        }).then(function (response) {
            // Array for 5-days 
            var day = [0, 8, 16, 24, 32];
            var fiveDayCard = $(".fiveDayCard").addClass("card-body");
            var fiveDayDiv = $(".fiveDayOne").addClass("card-text");
            fiveDayDiv.empty();
            // For each for 5 days
            day.forEach(function (i) {
                var FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
                FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");

                fiveDayDiv.append("<div class=fiveDayColor>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");


            })

        });






    }
})









//weather api
// function buildQueryURL() {
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=austin&appid=9eb51aba9e5654b6e1bc5b9934efaba8&units=imperial";

//     var queryParams = { "api-key": "9eb51aba9e5654b6e1bc5b9934efaba8" };
//     //forecast api

//     var queryParams.q = $("")
//     var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=austin&appid=9eb51aba9e5654b6e1bc5b9934efaba8&units=imperial"


//     //data api
//     var dataQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=9eb51aba9e5654b6e1bc5b9934efaba8&lat=response.coord.lat&lon=response.coord.lon";
//     "austin&appid=9eb51aba9e5654b6e1bc5b9934efaba8&units=imperial"



    //click handlers
    //click event listener on button
    //$("#button").on("click", function (event) {
        //event.preventDefault();

        //empties the input box
       // $("#search-term").val("")


        //ajax request from the weather API
        //var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + weather + "9eb51aba9e5654b6e1bc5b9934efaba8&units";
        //grabbing and storing weather property from the button
       // var weather = $(this).attr("current-weather");









//getting weather api from longitude and latitude coordinates

    
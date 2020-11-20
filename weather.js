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
        $.ajax({
            //specifies the type of request from the ajax
            
            //attaching searchVal and api key which we just created and here we are spefiying the request
            url: queryURL,
            method: "GET"
    
            //just grabbing values from ajax here than console logged it
        }) .then( function (response) {
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
            $(".current").append(`<div>Longitude: ${response.coord.lon}</div>`);
            $(".current").append(`<div>Lattitude: ${response.coord.lat}</div>`);

            $(".future").append(`<h1> View Future Forecasts</h1>`);
             
            //ajax for future forecast

            
            var futureQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + futureFor + "austin&appid=9eb51aba9e5654b6e1bc5b9934efaba8&units=imperial";
            $.ajax({
                    //specifies the type of request from the ajax
                    
                    //attaching searchVal and api key which we just created and here we are spefiying the request
                    url: futureQueryURL,
                    method: "GET"
                })
               


        })
       
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


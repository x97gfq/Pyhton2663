
function render(){
    //using Open Weather Map (please do not re-use this appid in the querystring, register for your own)
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=6185217&appid=2ad263b9a82888fd39382d86aa2fc030";

    //make an http GET rerquest to the service URL
    $.get(weatherUrl, function( data ) {
        //response (JSON) is handled here, starting with a sanity check
        if (data.weather[0] != null) {
            //piece together the weather description from the response data
            var weatherData= data.weather[0];
            var mainWeather = weatherData.main;
            var mainDescription = weatherData.description;

            var temp = data.main.temp;
            var tempCelsius = (parseInt(temp) - 273.15).toFixed(1);

            //build an HTML string to display to the weather to the user, and put it in the #content placeholder (see index.html)
            var weatherDisplay = mainWeather + " (" + mainDescription + ") and " + tempCelsius + "degrees";
            $("#content").html(weatherDisplay);
        }
    });
 }
 
 $(document).ready(function(){
    //When the page loads, call the render function to retrieve the weather data
    render();
});
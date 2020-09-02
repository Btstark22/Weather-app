const btn = document.getElementById('search-btn');
APIKey = '&APPID=c3d5ccbf67d50467fc87e74fdf1c4228';
weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q='

btn.addEventListener('click', function () {
    document.getElementById('info-div').innerHTML = "";
    const userInput = document.getElementById('city-name').value;
    console.log(userInput);

    queryURL = weatherURL + userInput + APIKey;
    fetch(queryURL) 
        .then(function (response) {
            return response.json()
            .then(function(data) {
                console.log(data);
                const infoDiv = document.getElementById('info-div');

                //City Name
                const cityName = document.createElement('h2');
                cityName.textContent = userInput;
                infoDiv.prepend(cityName);

                // Temperature
                const kelvinTemp = JSON.stringify(data.main.temp);
                const kelvinTempParsed = parseFloat(kelvinTemp);
                const fahrenheitTemp = kelvinTempParsed * 1.8 - 459.67;
                const fahrenheitTempParsed = parseInt(fahrenheitTemp);
                const newP1 = document.createElement('p');
                newP1.textContent = "Temperature: " + fahrenheitTempParsed + "°F";
                infoDiv.appendChild(newP1);

                // Weather
                const weather = JSON.stringify(data.weather[0].description);
                const newP2 = document.createElement('p');
                newP2.textContent = "Weather: " + weather;
                infoDiv.appendChild(newP2);

                //wind
                const wind = JSON.stringify(data.wind.speed);
                const newP3 = document.createElement('p');
                newP3.textContent = "Wind: " + wind + ' Mph'
                infoDiv.appendChild(newP3);

            });
        });
});

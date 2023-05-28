
const getWeatherData = (city) =>{
    const options = {
       method: 'GET',
       headers: {
           'X-RapidAPI-Key': 'd64cd08ca7msh500c01069c7c315p1384efjsn24f06900efca',
           'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
       }
   };
   
   return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
       .then(response => response.json())
       .then(data => data)
       .catch(err => console.error(err));
   }
   
   
   const searchCity = async () => {
     let city = document.getElementById('city-input').value;
     // CODE GOES HERE
     // console.log(city)
      const data = await getWeatherData(city)
      showWeatherData(data)
   
   }
   
   const showWeatherData = (weatherData) => {
     //CODE GOES HERE
     console.log(weatherData.main.temp)
     document.getElementById('temp').innerText = weatherData.main.temp
     document.getElementById('min-temp').innerText = weatherData.main.temp_min
     document.getElementById('max-temp').innerText = weatherData.main.temp_max
     document.getElementById('city-name').innerText = weatherData.name
     document.getElementById('weather-type').innerText = weatherData.weather[0].main
     
   }
   
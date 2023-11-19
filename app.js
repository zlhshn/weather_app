const temp = document.querySelector('.temp')
const cityName = document.querySelector('.city')
const wind = document.querySelector('.wind')
const inputSearch = document.getElementById('input')
const buttonSearch = document.getElementById('btn')
const iconWeather = document.getElementById('weather-img')


const API_KEY = '7c8e0d33a15dd4f461051da4a560cc1d'
const BASE_URL ='https://api.openweathermap.org/data/2.5/weather?units=metric&q='



const getWeather = async(city)=>{

const res = await fetch(BASE_URL + city + `&appid=${API_KEY}`)
if(res.status == 404){
    alert('invalid city name')
    document.querySelector('.weather').style.display = 'none'
    
}else{

    const data = await res.json()

console.log(data);

cityName.innerHTML = data.name
temp.innerHTML = Math.round(data.main.temp)  + '°C'
wind.innerHTML = data.wind.speed + 'km/h'

if(data.weather[0].main == 'Clouds'){
    iconWeather.src = 'img/cloudy.png'
}else if(data.weather[0].main == 'Clear'){
    iconWeather.src = 'img/sunny.png'
}
else if(data.weather[0].main == 'Rain'){
    iconWeather.src = 'img/rainy.png'
}
else if(data.weather[0].main == 'Drizzle'){
    iconWeather.src = 'img/sunny-rainy.png'
}
else if(data.weather[0].main == 'Mist'){
    iconWeather.src = 'img/cloudy.png'
}

document.querySelector('.weather').style.display = 'block'
}



}



buttonSearch.addEventListener('click',()=>{

    getWeather(inputSearch.value)

})


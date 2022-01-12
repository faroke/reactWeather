import axios from "axios";
import { API } from "../utils/weather";
import { useEffect, useState } from "react";
import '../assets/css/card.css'
const WeatherDisplay = () => {
    const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("Unknown");
    const [city, setCity] = useState("Paris");
    const [country, setCountry] = useState("FR");
    const [img, setImg] = useState("http://openweathermap.org/img/wn/01d@2x.png");

    const weatherData = (city, country) => {
        axios(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}`)
            .then(({ data }) => {
                setTemperature(data.main.temp - 273.15);
                setDesc(data.weather[0].main);
                setCity(data.name);
                setCountry(data.sys.country);
                setImg(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        if (localStorage.getItem('lat') !== null && localStorage.getItem('lon') !== null) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${localStorage.getItem('lat')}&lon=${localStorage.getItem('lon')}&appid=${API}`)
                .then(({ data }) => {
                    setTemperature(data.main.temp - 273.15);
                    setDesc(data.weather[0].main);
                    setCity(data.name);
                    setCountry(data.sys.country);
                    setImg(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);
    return (
        <>
            <div>
                <div class="card">
                    <div class="card-circle">
                        <img src={img} alt=""/>
                    </div>
                    <div class="text-content">
                        <span className="card-title"><strong>{city}</strong></span>
                        <p>{new Date().toLocaleString()}</p>
                        <h4>{Math.round(temperature * 100) / 100} ℃ - {desc}</h4>
                    </div>
                </div>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <button
                    onClick={() => {
                        weatherData(city, country);
                    }}
                >
                    Search
                </button>
            </div>
        </>
    );
};
export default WeatherDisplay
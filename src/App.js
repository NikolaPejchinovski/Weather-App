import { useEffect, useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import cloudWithSun from "./icons/cloud-with-sun.svg";
import cloud from "./icons/cloud.svg";
import cloudSnow from "./icons/cloud-snow.svg";
import sun from "./icons/sun.svg";
import cloudRain from "./icons/cloud-rain.svg";
import cloudSprinkle from "./icons/cloud-sprinkle.svg";
import cloudThunder from "./icons/cloudy-thunder.svg";
import sunnyCloudSnow from "./icons/sunny-cloud-snow.svg";
import axios from "axios";

function App() {
  const [city, setCity] = useState('Veles');
  const [search, setSearch] = useState('Veles');
  const [celsius, setCelsius] = useState('');
  const [icon, setIcon] = useState('');
  const [condition, setCondition] = useState('');


 // Fetch Weather
  useEffect(() => {

    fetchWeather(search);

  }, [search]);

  const fetchWeather = async (searchTerm) => {
    try {
      let res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=9534da0bb256466493f125748242101&q=${searchTerm}`);
    let data = res.data;

    setCelsius(data.current.temp_c);
    setCondition(data.current.condition.text);
    if(data.current.condition.text === 'Sunny') {
      setIcon(sun);
    } else if (data.current.condition.text === 'Partly cloudy') {
      setIcon(cloudWithSun);
    } else if (data.current.condition.text === 'Overcast') {
      setIcon(cloud);
    } else if (data.current.condition.text === 'Patchy light snow') {
      setIcon(sunnyCloudSnow);
    } else if (data.current.condition.text === 'Moderate rain') {
      setIcon(cloudSprinkle);
    } else if (data.current.condition.text === 'Patchy light rain') {
      setIcon(cloudSprinkle);
    } else if (data.current.condition.text === 'Light rain') {
      setIcon(cloudSprinkle);
    } else if (data.current.condition.text === 'Rain') {
      setIcon(cloudRain);
    } else if (data.current.condition.text === 'Heavy Rain') {
      setIcon(cloudRain);
    } else if (data.current.condition.text === 'Light snow') {
      setIcon(cloudSnow);
    } else if (data.current.condition.text === 'Clear') {
      setIcon(sun);
    } else {
      setIcon(data.current.condition.icon);
    }

    console.log(data);

    return data;
    } catch (error) {
      console.error('Error fetching weather', error);
    }
    
  };

  // Get the search value

    const handleChange = async (e) => {
        if(e.key === 'Enter') {
          const newSearchTerm = e.target.value;
          setSearch(newSearchTerm);
          setCity(newSearchTerm);  
        }
    }

  return (
    <div className="container">
      <Search handleChange={handleChange}/>
      <Weather city={city} condition={condition} weathericon={icon} celsius={celsius} />
    </div>
  );
}

export default App;

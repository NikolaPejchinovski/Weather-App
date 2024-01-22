import City from "./City"
import Temperature from "./Temperature"

const Weather = ({ city, condition, weathericon, celsius, feeling, wind, rain }) => {
  return (
    <div className="weather-container">
        <City text={city} weather={condition} feeling={feeling} wind={wind} rain={rain}/>
        <Temperature weathericon={weathericon} celsius={celsius}/>
    </div>
  )
}

export default Weather
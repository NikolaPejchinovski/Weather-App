import City from "./City"
import Temperature from "./Temperature"

const Weather = ({ city, condition, weathericon, celsius }) => {
  return (
    <div className="weather-container">
        <City text={city} weather={condition} />
        <Temperature weathericon={weathericon} celsius={celsius}/>
    </div>
  )
}

export default Weather
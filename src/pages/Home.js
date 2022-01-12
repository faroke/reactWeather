import WeatherDisplay from "../components/WeatherDisplay";
import {getPosition} from "../utils/weather"
function Home() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition)
  }
    return (
      <div>
        <WeatherDisplay/>
      </div>
    );
  }



  
  export default Home;
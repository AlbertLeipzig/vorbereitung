import { useEffect, useState } from 'react';
import { getWeatherData } from './getWeatherData.jsx';
import { getCurrentLocation } from './getCurrentLocation.jsx';
import './main.scss';

function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchDataAndLocation = async () => {
      try {
        const location = "Leipzig";
        const data = await getWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching location or weather data:', error);
      }
    };

    fetchDataAndLocation();
  }, []);

  return (
    <>
      <h1>Das Wetter bei mir</h1>
      {weatherData.location && (
        <div>
          <p>
            {weatherData.location.name} / {weatherData.location.region}
          </p>
        </div>
      )}
      {weatherData.current && (
        <div>
          <p>{weatherData?.current.condition.text}</p>
          <p className="temperature">{weatherData?.current.temp_c}º</p>
        </div>
      )}
    </>
  );
}

export default App;

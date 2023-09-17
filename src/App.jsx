import { useEffect, useState } from 'react';
import { FetchData } from './fetchData.jsx';
import { getCurrentLocation } from './getCurrentLocation.jsx';
import './main.scss';

function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchDataAndLocation = async () => {
      try {
        const location = await getCurrentLocation();
        const { latitude, longitude } = await location;
        const data = await FetchData(latitude, longitude);
        setWeatherData(data);
        console.log(data); // Log the data when it's available
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

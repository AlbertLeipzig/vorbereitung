const baseUrl = 'http://api.weatherapi.com/v1';
const endPoint = 'current.json';
const api_key = '2da9834a04ec443497c200632230506';

export const FetchData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `${baseUrl}/${endPoint}?key=${api_key}&q=${latitude},${longitude}&aqi=no`
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

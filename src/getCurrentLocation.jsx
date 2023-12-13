export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    try {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const locationInfo = {
              latitude,
              longitude,
            };
            console.log({ locationInfo });

            resolve(locationInfo);
          },
          (error) => {
            console.error('Error getting geolocation:', error);
            reject(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser.');
        reject('Geolocation is not supported');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      reject(error);
    }
  });
};
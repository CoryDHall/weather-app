export function getGeolocation(callback) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      callback({ lat: latitude, lon: longitude });
    },
    (e) => {
      console.warn(e.message);
      callback(false);
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}

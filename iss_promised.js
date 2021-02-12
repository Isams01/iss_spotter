const request = require('request-promise-native');


const fetchMyIP = function() {
  // use request to fetch IP address from JSON API
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = (body) => {
    const myIP = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${myIP}`);
};

const fetchISSFlyOverTimes = function(coords) {
  const {latitude, longitude} = JSON.parse(coords);
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude});
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
    const passes = JSON.parse(body).response;
    return passes;
  });
}

module.exports = { nextISSTimesForMyLocation };


const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
const request = require('request');




fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  fetchCoordsByIP(ip,(error, location) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    console.log('It worked! Returned coordinates:' , location);
    fetchISSFlyOverTimes(location, (error, response) => {
      if (error) {
        console.log('Woops, something went wrong! ', error);
        return;
      }
      console.log(JSON.parse(response).response);
    })
  })
});


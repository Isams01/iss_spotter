const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const nextISSTimesForMyLocation = () => {
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }

    fetchCoordsByIP(ip,(error, location) => {
      if (error) {
        console.log("It didn't work!" , error);
        return;
      }
      console.log('It worked! Returned coordinates:' , location);
      fetchISSFlyOverTimes(location, (error, passTimes) => {
        if (error) {
          console.log('Woops, something went wrong! ', error);
          return;
        }
        passTimes.forEach(time => {
          let readableDate = new Date(time.risetime);
          console.log(`Next pass at ${readableDate} for ${time.duration} seconds`);
        })
      });
    });
  });
}

nextISSTimesForMyLocation();

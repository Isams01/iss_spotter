const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((body) => {
    body.forEach(time => {
      let readableDate = new Date(time.risetime);
      console.log(`Next pass at ${readableDate} for ${time.duration} seconds`);
    });
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

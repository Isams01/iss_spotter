const { nextISSTimesForMyLocation } = require('./iss');



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log('Woops, something went wrong! ', error);
  }
  passTimes.forEach(time => {
    let readableDate = new Date(time.risetime);
    console.log(`Next pass at ${readableDate} for ${time.duration} seconds`);
  });
});

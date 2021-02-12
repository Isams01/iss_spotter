const { fetchMyIP } = require('./iss_promised');

fetchMyIP().then((body) => {
  const myIP = JSON.parse(body).ip;
  //callback(null,myIP);
  console.log(myIP);
});
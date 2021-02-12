fetchMyIP().then((body) => {
 
  const myIP = JSON.parse(body).ip;
  //callback(null,myIP);
  console.log(myIP);
});
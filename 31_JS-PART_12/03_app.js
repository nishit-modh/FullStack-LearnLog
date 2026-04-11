let apiUrl = "https://catfact.ninja/fact";

fetch(apiUrl)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log("data 1 : " + data.fact);
    return fetch(apiUrl);
  })
  .then((response2) => {
    return response2.json();
  })
  .then((data2) => {
        console.log("data 2 : " + data2.fact);
  })
  .catch((err) => {
    console.log(`error Occured: ${err}`);
  });

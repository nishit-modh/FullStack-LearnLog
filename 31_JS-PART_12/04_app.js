let apiUrl = "https://catfact.ninja/fact";

async function getFact() {
  try {
    let res = await fetch(apiUrl);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(apiUrl);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (err) {
    console.log(`error occured : ${err}`);
  }
}
getFact();

document.querySelector("button").addEventListener("click", gettFetch);

function gettFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  const url = API_Key

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.location.region);
      //console.log(data.description);
      //console.log(data.temperature);
      document.querySelector(".description").innerText =
        data.current.condition.text;
      let city = data.location.name;
      let state = data.location.region;
      document.querySelector(".temp").innerText = data.current.temp_f + "°F";
      document.querySelector(".city").innerText = `${city}, ${state}`;
      document.querySelector("img").src = data.current.condition.icon;
    })

    .catch((err) => {
      console.log(`error ${err}`);
    });
}

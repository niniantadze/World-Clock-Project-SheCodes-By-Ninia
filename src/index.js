setInterval(function () {
  let tbilisiElement = document.querySelector("#tbilisi");
  let tbilisiDateElement = tbilisiElement.querySelector(".date");
  let tbilisiTimeElement = tbilisiElement.querySelector(".time");
  let tbilisiTime = moment().tz("Asia/Tbilisi");

  tbilisiDateElement.innerHTML = tbilisiTime.format("MMMM Do YYYY");
  tbilisiTimeElement.innerHTML = `${tbilisiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);

setInterval(function () {
  //warsaw time
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = `${warsawTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);

setInterval(function () {
  //stockholm time

  let stockholmElement = document.querySelector("#stockholm");
  let stockholmDateElement = stockholmElement.querySelector(".date");
  let stockholmTimeElement = stockholmElement.querySelector(".time");
  let stockholmTime = moment().tz("Europe/Stockholm");

  stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
  stockholmTimeElement.innerHTML = `${stockholmTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);
setInterval(function () {
  //reykjavik time

  let reykjavikElement = document.querySelector("#reykjavik");
  let reykjavikDateElement = reykjavikElement.querySelector(".date");
  let reykjavikTimeElement = reykjavikElement.querySelector(".time");
  let reykjavikTime = moment().tz("Atlantic/Reykjavik");

  reykjavikDateElement.innerHTML = reykjavikTime.format("MMMM Do YYYY");
  reykjavikTimeElement.innerHTML = `${reykjavikTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);

//choosing city

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let fourCitiesElement = document.querySelector("#fourCities");

  function updateTime() {
    let cityTime = moment().tz(cityTimeZone);
    fourCitiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")};
          </div>
        </div>
        <div class="time">
          ${cityTime.format("h:mm:ss [<small>]A[</small>]")}
        </div>
      </div>
      <a href="index.html"> 🔙 All cities </a>
    `;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

let citySelectElement = document.querySelector("#oneCity");
citySelectElement.addEventListener("change", updateCity);

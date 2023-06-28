let city = "Delhi";

const weather = async (ccc) => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + ccc;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "02b32bbd9emsh359897c9d689fe4p18528ajsn4346db6bd2ee",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    cityname.innerHTML = city;
    temp.innerHTML = result.temp + "°";
    humi.innerHTML = result.humidity;
    cloud_pct.innerHTML = result.cloud_pct;
    feels_like.innerHTML = result.feels_like;
    min_temp.innerHTML = result.min_temp;
    //   sunrise.innerHTML = result.sunrise;
    //   sunset.innerHTML = result.sunset;
    wind_degrees.innerHTML = result.wind_degrees;
    wind_speed.innerHTML = result.wind_speed;
    max_temp.innerHTML = result.max_temp;

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
// weather(city);
btn.addEventListener("click", () => {
  const val = document.getElementsByTagName("input")[0].value;
  weather(val);
  city=val;

});

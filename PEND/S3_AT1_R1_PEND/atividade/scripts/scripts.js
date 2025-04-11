const search = document.getElementById("search");
const cityInput = document.getElementById("city");
const h1 = document.getElementById("cityName");
const img = document.getElementById("img");
const temp = document.getElementById("temp");
const clima = document.getElementById("clima");
const tempmax = document.getElementById("tempmax");
const umidade = document.getElementById("umidade");
const tempmin = document.getElementById("tempmin");
const vento = document.getElementById("vento");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.value;
  const key = "29ccbf0b9869869022c9e634809d7c11";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      cityName
    )}&appid=${key}&units=metric&lang=pt_br`
  );
  const data = await response.json();

  console.log(data);
};

search.addEventListener("submit", processar);

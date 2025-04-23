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
const all_content = document.getElementById("all_content");

const processar = async (event) => {
  event.preventDefault();
  const cityName = cityInput.value;
  const key = "29ccbf0b9869869022c9e634809d7c11";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${key}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    h1.textContent = data.name;
    img.textContent = data.weather[0].icon;
    temp.textContent = `${data.main.temp}C°`;
    clima.textContent = data.weather[0].description;
    tempmax.textContent = `${data.main.temp_max}C°`;
    tempmin.textContent = `${data.main.temp_min}C°`;
    umidade.textContent = data.main.humidity;
    vento.textContent = `${data.wind.speed}Km/h`;

    all_content.classList.add("visible");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

console.log(img, temp, clima, tempmax, tempmin, umidade, vento);

search.addEventListener("submit", processar);

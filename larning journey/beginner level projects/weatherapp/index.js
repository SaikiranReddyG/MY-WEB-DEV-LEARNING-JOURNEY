const apikey = "28c4cc201a92a31fbdf01e1ff38c7d79";

const weatherDATAe1 = document.getElementById("weather-data");

const cityInputE1 = document.getElementById("city-input");

const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event)=>{
    event.preventDefault();
    const cityValue = cityInputE1.value;
    getweatherdata(cityValue);

});

async function getweatherdata(cityValue){
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric');

        if (!response.ok) {
            throw new Error("network respose was not OK")
        }

        const data= await response.json()

        console.log(data);
    } catch (error) {

    }
}
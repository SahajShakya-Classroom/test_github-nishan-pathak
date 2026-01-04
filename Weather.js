
console.log("Script started");
require("dotenv").config();
const apiKey = process.env.API_KEY; 
const city = "Kathmandu";

if (!apiKey) {
    console.error(" API KEY NOT FOUND. Check your .env file.");
    process.exit(1);
}
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

// FETCH WEATHER 
fetch(url)
    .then(response => response.json())
    .then(data => {
        if (!data.list) {
            console.error("API ERROR RESPONSE:");
            console.error(data);
            return;
        }
        console.log("\n 5-Day Weather Forecast - Nepal\n");

        for (let i = 0; i < data.list.length; i += 8) {
            const date = new Date(data.list[i].dt * 1000).toDateString();
            const temp = data.list[i].main.temp;
            const weather = data.list[i].weather[0].description;

            console.log(`${date} → ${temp}°C, ${weather}`);
        }
    })
    .catch(error => {
        console.error(" Network Error:", error);
    });

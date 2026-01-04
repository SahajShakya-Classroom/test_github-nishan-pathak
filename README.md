## DISCUSSION:
This is Weather terminal program that give the 5-day weather of Kathmandu. It works by fetching real-time weather data from the internet through the OpenWeatherMap API. The API key is kept in a separate .env file and the code uses dotenv to load it instead of writing it directly. If the API key is not present, it stops the execution by raising an error to avoid executing the program with incorrect or missing keys.

The code sends a request to the API for the weather and conveted the results to a JSON format and then extracts the required details of weather sucha as the date, temperature and description. Since the API provides data of every 3 hours, the code allows only a single data point to offer a basic daily forecast. There is a proper error handling code to ensure the program does not crash in case of a network or API error.

## Conclusion:
This program shows the application of APIs, asynchronous code and environment variables in Node.js. This code does not only apply these concepts but also provides an effective way to extract raw API information for an understandable daily forecast.


![Screenshot 2026-01-04 230947](https://github.com/user-attachments/assets/79734ec2-0e4d-4090-9a8b-f856f72096ea)

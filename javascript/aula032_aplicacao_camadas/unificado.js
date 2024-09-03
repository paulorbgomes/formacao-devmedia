console.log("Conversao de F Para °C");
let tempF = 100;
const tempF2tempC = (F) => {
    return ((5/9) * (F - 32));
}
console.log(`${tempF} F equivale a ${tempF2tempC(tempF).toFixed(2)}°C`);
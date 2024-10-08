document.getElementById("tempForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const tempInput = parseFloat(document.getElementById("tempInput").value);
    const unit = document.getElementById("unitSelect").value;

    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = tempInput;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unit === "F") {
        fahrenheit = tempInput;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        kelvin = tempInput;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("celsiusResult").textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("fahrenheitResult").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvinResult").textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
});

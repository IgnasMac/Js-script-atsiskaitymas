let tekstas = "Labas"; 
if (tekstas.length > 5) { 
    console.log("Tekstas ilgesnis nei 5 simboliai."); 
} else {
    console.log("Tekstas nėra ilgesnis nei 5 simboliai."); 
}

function didesneReiksme(a, b) {
    return (a > b) ? a : b; 
}


console.log(didesneReiksme(5, 10)); 
console.log(didesneReiksme(15, 7)); 
console.log(didesneReiksme(20, 20)); 

function konvertuotiTemperatura() {
    let celsius = parseFloat(prompt("Įveskite temperatūrą Celsijaus:")); 
    if (isNaN(celsius)) { 
        alert("Prašome įvesti galiojančią temperatūrą."); 
        let fahrenheit = (celsius * 9/5) + 32; 
        alert(`Temperatūra Farenheito: ${fahrenheit.toFixed(2)}°F`); 
    }
}

const MAX_NUMBER = 8;

function generateRandomNumbers(numbers) {
    let result = [];

    // Añadir numeros ya ingresados
    numbers.forEach(element => {
        result.push(element);
    });

    while (result.length < MAX_NUMBER) {
        let randomNumber = Math.floor(Math.random() * 99);
        if (!result.includes(randomNumber)) {
            result.push(randomNumber);
        }
    }

    // Ordenar el array
    result.sort((a, b) => {
        return a - b;
    });

    return result;
}

function showNumbers(arrayNumeros) {
    let stringNumeros = "";
    let largoArray = arrayNumeros.length;

    for (let i = 0; i < largoArray - 1; i++) {
        stringNumeros += arrayNumeros[i].toString().padStart(2, "0") + "-";
    }

    stringNumeros += arrayNumeros[largoArray - 1];

    let texto = document.getElementById("arrayGenerado");
    texto.innerHTML = stringNumeros;
}

function getInputNumers() {
    let inputs = document.getElementsByClassName("input-numeros");
    let arrayNumbers = []

    //Tomar valores de los input
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value != '') {
            arrayNumbers.push(parseInt(inputs[i].value));
        }
    }

    return arrayNumbers;
}

let copyButton = document.getElementById("boton-copiar");
let button = document.getElementById("generarNumeros");
button.addEventListener("click", () => {
    let arrayNumeros = getInputNumers();
    let numerosAleatorios = generateRandomNumbers(arrayNumeros);
    copyButton.style.display = "inline-block";
    showNumbers(numerosAleatorios);
});

copyButton.addEventListener("click", () => {
    let generatedNumbers = document.getElementById("arrayGenerado");
    navigator.clipboard.writeText(generatedNumbers.textContent)
        .then(() => {
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        })
})

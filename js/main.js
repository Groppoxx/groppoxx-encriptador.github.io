const input = document.getElementById("txtInput");
const output = document.getElementById("txtOutput");

const buttonEncriptar = document.getElementById("btnEncriptar");
const buttonDesencriptar = document.getElementById("btnDesencriptar");
const buttonCopiar = document.getElementById("btnCopiar");

const keys = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

let partidor = [];
let palabraFinal = "";

const mayusculas = /[A-Z]/g;
const tildes = [["á", "Á"], ["é", "É"], ["í", "Í"], ["ó", "Ó"], ["ú", "Ú"]];

function comprobarMayusculaTilde() {
    let inputMinuscula;
    for (let i = 0; i < input.value.length; i++) {
        for (let j = 0; j < tildes.length; j++) {
            if (input.value[i].match(mayusculas) || input.value[i].match(tildes[j][0]) || input.value[i].match(tildes[j][1])) {
                return true;
            }
        }
    }
}

function encriptar() {
    if (comprobarMayusculaTilde()) {
        alert("¡¡¡SE DETECTO MAYUSCULAS O TILDES!!!");
    }
    else {
        for (let i = 0; i < input.value.length; i++) {
            partidor.push(input.value[i]);

            for (let j = 0; j < keys.length; j++) {
                if (partidor[i] == keys[j][0]) {
                    partidor[i] = keys[j][1];
                }
            }
        }

        nuevaPalabra();

        output.value = palabraFinal;

        vaciarArreglo(partidor);
    }

    input.value = "";
    input.focus();

    document.getElementById("textContainer").style.display = "hidden";
    document.getElementById("textContainer").style.display = "none";

    document.getElementById("txtOutput").style.display = "show";
    document.getElementById("txtOutput").style.display = "flex";
    document.getElementById("copyContainer").style.display = "show";
    document.getElementById("copyContainer").style.display = "flex";
}

function nuevaPalabra() {
    let auxWord = "";
    for (let i = 0; i < partidor.length; i++) {
        auxWord += partidor[i];
    }
    palabraFinal = auxWord;
}

function vaciarArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo.splice(i);
    }
}

function desencriptar() {
    if (comprobarMayusculaTilde()) {
        alert("¡¡¡SE DETECTO MAYUSCULAS O TILDES!!!");
    }
    else {
        palabraFinal = input.value;
        let tempWord = "";

        for (let i = 0; i < keys.length; i++) {
            tempWord = palabraFinal.replaceAll(keys[i][1], keys[i][0]);
            palabraFinal = tempWord;
        }

        output.value = palabraFinal;
    }

    input.value = "";
    input.focus();

    document.getElementById("textContainer").style.display = "hidden";
    document.getElementById("textContainer").style.display = "none";

    document.getElementById("txtOutput").style.display = "show";
    document.getElementById("txtOutput").style.display = "flex";
    document.getElementById("copyContainer").style.display = "show";
    document.getElementById("copyContainer").style.display = "flex";
}

function copiarOutput() {
    let txtEncriptado = output.value;
    navigator.clipboard.writeText(txtEncriptado);
}

input.focus();

buttonEncriptar.onclick = encriptar;

buttonDesencriptar.onclick = desencriptar;

buttonCopiar.onclick = copiarOutput;
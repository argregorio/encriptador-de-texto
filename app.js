const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const textoEntrada = document.getElementById('texto-entrada');
const textoSalida = document.getElementById('texto-salida');
const mensajeError = document.getElementById('mensaje-error');

// Algoritmo de encriptación básico (sustitución de caracteres)
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const clave = "zyxwvutsrqponmlkjihgfedcba"; // Clave secreta

function encriptar(texto) {
    texto = texto.toLowerCase();
    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        const indiceLetra = alfabeto.indexOf(letra);

        if (indiceLetra !== -1) {
            textoEncriptado += clave[indiceLetra];
        } else {
            textoEncriptado += letra;
        }
    }

    return textoEncriptado;
}

function desencriptar(texto) {
    texto = texto.toLowerCase();
    let textoPlano = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i];
        const indiceLetra = clave.indexOf(letra);

        if (indiceLetra !== -1) {
            textoPlano += alfabeto[indiceLetra];
        } else {
            textoPlano += letra;
        }
    }

    return textoPlano;
}

btnEncriptar.addEventListener('click', () => {
    const textoPlano = textoEntrada.value;
    const textoEncriptado = encriptar(textoPlano);

    if (textoEncriptado) {
        textoSalida.value = textoEncriptado;
        mensajeError.textContent = '';
    } else {
        mensajeError.textContent = 'Error al encriptar el texto.';
    }
});

btnDesencriptar.addEventListener('click', () => {
    const textoEncriptado = textoEntrada.value;
    const textoPlano = desencriptar(textoEncriptado);

    if (textoPlano) {
        textoSalida.value = textoPlano;
        mensajeError.textContent = '';
    } else {
        mensajeError.textContent = 'Error al desencriptar el texto.';
    }
});

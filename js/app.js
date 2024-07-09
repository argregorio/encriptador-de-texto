const inputTexto = document.getElementById('input-texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const inputResultado = document.getElementById('mensaje-texto');
const btnCopiar = document.getElementById('btn-copy');
const outputImg = document.getElementById('img-muneco');
const outIniMsg = document.getElementById('outMsg');
const soloLetras = '^[a-z ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
  btnEncriptar.addEventListener('click', encriptarTexto);
  btnDesencriptar.addEventListener('click', desencriptarTexto);
  btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(' ');
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('e', 'enter');
      palabra = palabra.replaceAll('i', 'imes');
      palabra = palabra.replaceAll('a', 'ai');
      palabra = palabra.replaceAll('o', 'ober');
      palabra = palabra.replaceAll('u', 'ufat');

      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');
    outputImg.style.display = 'none';
    outIniMsg.style.display = 'none';
    btnCopiar.style.display = 'block';
    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos, ni caracteres especiales');
    return;
  }
}

function desencriptarTexto(e) {
  e.preventDefault();
  inputResultado.value = '';
  let texto = inputTexto.value;

  if (texto.match(soloLetras) != null) {
    let palabras = texto.split(" ");
    let nuevasPalabras = [];

    for (let palabra of palabras) {
      palabra = palabra.replaceAll('enter', 'e');
      palabra = palabra.replaceAll('imes', 'i');
      palabra = palabra.replaceAll('ai', 'a');
      palabra = palabra.replaceAll('ober', 'o');
      palabra = palabra.replaceAll('ufat', 'u');
      nuevasPalabras.push(palabra);
    }

    const resultado = nuevasPalabras.join(' ');

    inputResultado.value = resultado;
  } else {
    mostrarError('Solo se permiten letras minúsculas, sin acentos');
    return;
  }
}

function mostrarError(mensaje) {
  const existeError = document.querySelector('.error');

  if (!existeError) {
    const textUser = document.getElementById('textUser');
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('error');

    divMensaje.textContent = mensaje;
    textUser.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3500);
  }
}

function copiarTexto(e) {
  e.preventDefault();
  const mensaje = inputResultado.value;

  navigator.clipboard.writeText(mensaje);
}
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
const textoEncriptado = encriptar(inputTexto.value)
mensagem.value = textoEncriptado
}

function encriptar (stringEncriptada) {
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] 
stringEncriptada = stringEncriptada.toLowerCase();

for (let i= 0; i < matrizCodigo.length; i++) {
	if (stringEncriptada.includes(matrizCodigo[i][o])) {
	stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
	}
}
return stringEncriptada;
} 


function btnDesencriptar() {
const textoDesencriptado = encriptar(inputTexto.value)
mensagem.value = textoDesencriptado
}


function desencriptar (stringDesencriptada) {
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] 
stringDesencriptada = stringDesencriptada.toLowerCase();

for (let i= 0; i < matrizCodigo.length; i++) {
	if (stringDesencriptada.includes(matrizCodigo[i][o])) {
	stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
	}
}
return stringDesencriptada;
} 




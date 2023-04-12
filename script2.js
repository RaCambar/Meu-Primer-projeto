const inputTexto = document.querySelector(".input-texto");// ponto estava no lado de fora
const mensagem = document.querySelector(".mensagem"); // aqui tinha que ter .

function btnEncriptar() {
const textoEncriptado = encriptar(inputTexto.value,"");
mensagem.value = textoEncriptado;

}

function encriptar (stringEncriptada) {
stringEncriptada = stringEncriptada.toLowerCase();

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] 


for (let i= 0; i < matrizCodigo.length; i++) {
	if (stringEncriptada.includes(matrizCodigo[i][0]))	{//era 0 em vez de o
	stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);// faltou colocar o stringEncriptada= no inicio
	}
}

return stringEncriptada;

} 

function btnDesencriptar() {
const textoDesencriptado = desencriptar(inputTexto.value)
mensagem.value = textoDesencriptado
}


function desencriptar (stringDesencriptada) {
let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]] //  aqui tem que iverter a matriz  pra poder desencriptar
stringDesencriptada = stringDesencriptada.toLowerCase();

for (let i= 0; i < matrizCodigo.length; i++) {
	if (stringDesencriptada.includes(matrizCodigo[i][0])) { //era 0 em vez de o, 
	stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])// faltou colocar o stringEncriptada= no inicio
	}
}
return stringDesencriptada;
} 

document.getElementById("copiar").addEventListener("click", copiar);
function copiar() {
  document.querySelector("#textarea").select();
  document.execCommand("copy");
}




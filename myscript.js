const textIn = document.getElementById("textIn");
const textOut = document.getElementById("textOut");

function btnEncriptar() {
    textOut.value = encriptar(textIn.value);
    textIn.value = "";
}

function encriptar(textoIn){
    textoIn = textoIn.toLowerCase();
    let matrizCodigo = [["e","enter"] ,["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];
    for(let i = 0; i < matrizCodigo.length ; i++){
        if(textoIn.includes(matrizCodigo[i][0])){
            textoIn=textoIn.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return textoIn;
}

function btnDesencriptar() {
    textIn.value = desencriptar(textOut.value);
    textOut.value = "";
}

function desencriptar(textOut){
    textOut = textOut.toLowerCase();
    let matrizCodigo = [["e","enter"] ,["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];
    for(let i = 0; i < matrizCodigo.length ; i++){
        if(textOut.includes(matrizCodigo[i][1])){
            textOut=textOut.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return textOut;   
}

function copiar() {
    navigator.clipboard.writeText(textOut.value);
    alert("Texto copiado",'success');    
    textOut.value = "";
}



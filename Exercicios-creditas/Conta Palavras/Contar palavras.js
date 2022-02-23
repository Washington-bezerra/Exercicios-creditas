function countWords(string){

    string = string.toLowerCase()
    listaDePalavras = string.split(" ");
    contadorDePalavras = {}

    listaDePalavras.forEach(element => {

        if (Object.keys(contadorDePalavras).includes(element)){
            contadorDePalavras[element] += 1
        }else{
            contadorDePalavras[element] = 1
        }
    });

    return contadorDePalavras
    
}

console.log(countWords("Doo bee doo bee doo"))

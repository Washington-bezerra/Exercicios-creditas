function isPalindromo(string){
    string = string.toLowerCase()
    //remove tudo que não é letra minuscula
    string = string.replace(/[^\a-z]+/g,'')

    console.log(string)

    for (var i = 0; i < string.length; i++){
        let letraDoI = string[i]
        let ultimaLetra = string[((string.length-1) - i)]

        if (letraDoI != ultimaLetra){
            return false
        }        
    }
    return true
}

console.log(isPalindromo("teste"))
console.log(isPalindromo("Madam, I'm Adam"))
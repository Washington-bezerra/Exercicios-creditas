let array =
[  
    [    
        [      ['Armando', 'PE'], ['Dave', 'TE']    ],
        [      ['Richard', 'PA'], ['Michael', 'TE']    ],
    ],
    
    [   
        [      ['Allen', 'TE'], ['Arthur', 'TE']    ],
        [      ['David', 'PA'], ['Omer', 'PE']    ],
    ]
];

function batalha(escolhaJogador1, escolhaJogador2, array, arrayGanhadores, cont, contador, conta){
    
    if (cont != null){
        if (escolhaJogador1 == escolhaJogador2){

            console.log(`Empate! O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
            arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
        }

        else if (escolhaJogador1 == 'PE' & escolhaJogador2 == 'TE'){
            console.log(`O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
            arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
        }

        else if (escolhaJogador1 == 'TE' & escolhaJogador2 == 'PA'){
            console.log(`O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
            arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
        }
        
        else if (escolhaJogador1 == 'PA' & escolhaJogador2 == 'PE'){
            console.log(`O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
            arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
        }
        else{
            console.log(`O jogador >${array[cont][contador][1]}< ganhou do ${array[cont][contador][0]}`);
            arrayGanhadores.push([array[cont][contador][1][0], array[cont][contador][1][1]]);
        }
    }else{

        if (escolhaJogador1 == escolhaJogador2){
            console.log(`Empate! O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
            arrayGanhadores[conta+1] = null;
        }
    
        else if (escolhaJogador1 == 'PE' & escolhaJogador2 == 'TE'){
            console.log(`O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
            arrayGanhadores[conta+1] = null;
        }   
        else if (escolhaJogador1 == 'TE' & escolhaJogador2 == 'PA'){
            console.log(`O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
            arrayGanhadores[conta+1] = null;
        }       
        else if (escolhaJogador1 == 'PA' & escolhaJogador2 == 'PE'){
            console.log(`O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
            arrayGanhadores[conta+1] = null;
        }
        else{
            console.log(`O jogador >${arrayGanhadores[conta+1]}< ganhou do ${arrayGanhadores[conta]}`);
            arrayGanhadores[conta] = null
        }
    }
}

arrayGanhadores = []
var fim = false

function removePerdedor(array, cont, arrayGanhadores, matamata){

    if(!matamata){

        if (cont < array.length){
            var contador = 0;

            while(contador < array[cont].length){

                var escolhaJogador1 = array[cont][contador][0][1];
                var escolhaJogador2 = array[cont][contador][1][1];

                batalha(escolhaJogador1, escolhaJogador2, array, arrayGanhadores, cont, contador);

                contador += 1;
            }

        }else{
            if (cont >= array.length){
                removePerdedor(array, cont, arrayGanhadores, true)
            }else{
                console.log(arrayGanhadores);
            }
        }

    }else{
        let conta = 0;
        
        while (conta < (arrayGanhadores.length-1)){

            var escolhaJogador1 = arrayGanhadores[conta][1];
            var escolhaJogador2 = arrayGanhadores[conta+1][1];

            batalha(escolhaJogador1, escolhaJogador2, array, arrayGanhadores, null, null, conta)

            conta+=2
        }

        var arrayGanhadores = arrayGanhadores.filter((element) => element != null);
        console.log(arrayGanhadores)

        if(arrayGanhadores.length == 1){
            fim = true;
            return console.log(`O ganhador é: ${arrayGanhadores}`);
        }
    }
    if (!fim){
        removePerdedor(array, cont+=1, arrayGanhadores, false)
    }
}   

removePerdedor(array, 0, arrayGanhadores, false)
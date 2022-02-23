let array =
[  
    [    
        [      ['Armando', 'PE'], ['Dave', 'TE']    ],
        [      ['Richard', 'PA'], ['Michael', 'TE']    ],
    ],
    
    [   
        [      ['Allen', 'TE'], ['Arthur', 'TE']    ],
        [      ['David', 'PA'], ['Omer', 'PE']    ],
    ],

    [   
        [      ['Paulo', 'TE'], ['José', 'TE']    ],
        [      ['Bruno', 'PA'], ['Thiago', 'PE']    ],
    ],

    [   
        [      ['Caio', 'PE'], ['Geovanna', 'PE']    ],
        [      ['Ana', 'PA'], ['Priscila', 'PE']    ],
    ],
];

arrayGanhadores = []

function removePerdedor(array, cont, arrayGanhadores, matamata, fim){

    if(!matamata){
        if (cont < array.length){
            var contador = 0;

            while(contador < array[cont].length){

                var escolhaJogador1 = array[cont][contador][0][1];
                var escolhaJogador2 = array[cont][contador][1][1];

                if (escolhaJogador1 == escolhaJogador2){

                    console.log(`Empate! O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
                    arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
                }
            
                else if (escolhaJogador1 == 'PE' & escolhaJogador2 == 'TE'){
                    console.log(`O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
                    arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
                }
                else if (escolhaJogador1 == 'PE' & escolhaJogador2 != 'TE'){
                    console.log(`O jogador >${array[cont][contador][1]}< ganhou do ${array[cont][contador][0]}`);
                    arrayGanhadores.push([array[cont][contador][1][0], array[cont][contador][1][1]]);
                }
            
                else if (escolhaJogador1 == 'TE' & escolhaJogador2 == 'PA'){
                    console.log(`O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
                    arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
                }
                else if (escolhaJogador1 == 'TE' & escolhaJogador2 != 'PA'){
                    console.log(`O jogador >${array[cont][contador][1]}< ganhou do ${array[cont][contador][0]}`);
                    arrayGanhadores.push([array[cont][contador][1][0], array[cont][contador][1][1]]);
                }
                
                else if (escolhaJogador1 == 'PA' & escolhaJogador2 == 'PE'){
                    console.log(`O jogador >${array[cont][contador][0]}< ganhou do ${array[cont][contador][1]}`);
                    arrayGanhadores.push([array[cont][contador][0][0], array[cont][contador][0][1]]);
                }
                else if (escolhaJogador1 == 'PA' & escolhaJogador2 != 'PE'){
                    console.log(`O jogador >${array[cont][contador][1]}< ganhou do ${array[cont][contador][0]}`);
                    arrayGanhadores.push([array[cont][contador][1][0], array[cont][contador][1][1]]);
                }

                contador += 1;
        
            }

        }else{
            if (cont >= array.length){
                console.log(arrayGanhadores)
                removePerdedor(array, cont, arrayGanhadores, true)
            }else{
                console.log(arrayGanhadores);
            }
        }
    }else{
        let conta = 0;
        var arrayGanhadores = arrayGanhadores.filter((element) => element != null);

        if(arrayGanhadores.length == 1){
            return console.log(`O ganhador é: ${arrayGanhadores}`);
        }
        
        while (conta < (arrayGanhadores.length-1)){

            var escolhaJogador1 = arrayGanhadores[conta][1];
            var escolhaJogador2 = arrayGanhadores[conta+1][1];


            if (escolhaJogador1 == escolhaJogador2){
                //console.log(`>>>>>>>>${escolhaJogador1}`)
                console.log(`Empate! O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
                //arrayGanhadores.splice((conta+1), 1);
                arrayGanhadores[conta+1] = null;
            }
        
            else if (escolhaJogador1 == 'PE' & escolhaJogador2 == 'TE'){
                console.log(`O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
                //arrayGanhadores.splice((conta+1), 1);
                arrayGanhadores[conta+1] = null;
            }
            else if (escolhaJogador1 == 'PE' & escolhaJogador2 != 'TE'){
                console.log(`O jogador >${arrayGanhadores[conta+1]}< ganhou do ${arrayGanhadores[conta]}`);
                //arrayGanhadores.splice(conta, 1);
                arrayGanhadores[conta] = null
            }
        
            else if (escolhaJogador1 == 'TE' & escolhaJogador2 == 'PA'){
                console.log(`O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
                //arrayGanhadores.splice((conta+1), 1);
                arrayGanhadores[conta+1] = null;
            }
            else if (escolhaJogador1 == 'TE' & escolhaJogador2 != 'PA'){
                console.log(`O jogador >${arrayGanhadores[conta+1]}< ganhou do ${arrayGanhadores[conta]}`);
                //arrayGanhadores.splice(conta, 1);
                arrayGanhadores[conta] = null
            }
            
            else if (escolhaJogador1 == 'PA' & escolhaJogador2 == 'PE'){
                console.log(`O jogador >${arrayGanhadores[conta]}< ganhou do ${arrayGanhadores[conta+1]}`);
                //arrayGanhadores.splice((conta+1), 1);
                arrayGanhadores[conta+1] = null;
            }
            else if (escolhaJogador1 == 'PA' & escolhaJogador2 != 'PE'){
                console.log(`O jogador >${arrayGanhadores[conta+1]}< ganhou do ${arrayGanhadores[conta]}`);
                //arrayGanhadores.splice(conta, 1);
                arrayGanhadores[conta] = null
            }

            console.log(arrayGanhadores)

            conta+=2
        }
    }

    removePerdedor(array, cont+=1, arrayGanhadores, false)
}

//removePerdedor(array, 0, arrayGanhadores, false)


function teste (cont){
    console.log(cont)
    if (cont > 10){
        return console.log("fim!!")
    }
    teste(cont+1)
}

teste(1)
function batalha(escolhaJogador1, escolhaJogador2, game){

    if (escolhaJogador1 == escolhaJogador2){
        return game[0];
    }

    else if (escolhaJogador1 == 'PE' & escolhaJogador2 == 'TE'){
        return game[0];
    }
    
    else if (escolhaJogador1 == 'TE' & escolhaJogador2 == 'PA'){
        return game[0];
    }
    
    else if (escolhaJogador1 == 'PA' & escolhaJogador2 == 'PE'){
        return game[0];
    }
    else{
        return game[1]
    }
}

function rpsGameWinner(game) {
    if (game.length != 2){
        throw new Error('WrongNumberOfPlayers');
    }
    game.forEach(element => {
        if(!['PE','PA','TE'].includes(element[1].toUpperCase())){
            throw new Error('NoSuchStrategyError');
        }
    });

    let escolhaJogador1 = game[0][1].toUpperCase();
    let escolhaJogador2 = game[1][1].toUpperCase();

    console.log(batalha(escolhaJogador1, escolhaJogador2, game))
}

rpsGameWinner([['Eua', 'pa'], ['Eu', 'pe']])

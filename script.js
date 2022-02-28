function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playerChoice (btnClicked) {
    switch(btnClicked){
        case 'Pierre': document.getElementById("imgMain").src = "Pierre.png"; iaChoice(0); break;
        case 'Feuille': document.getElementById("imgMain").src = "Feuille.png"; iaChoice(1); break;
        case 'Ciseaux': document.getElementById("imgMain").src = "Ciseaux.png"; iaChoice(2); break;
    }
}

function iaChoice(playerHand) {
    var iaHand = getRandomInt(3)
    //0 : Pierre, 1 : Feuille, 2 : Ciseaux
    switch(iaHand){
        case 0: document.getElementById("imgOrdi").src = "Pierre.png"; break;
        case 1: document.getElementById("imgOrdi").src = "Feuille.png"; break;
        case 2: document.getElementById("imgOrdi").src = "Ciseaux.png"; break;
    }

    if( iaHand === playerHand ){
    }else if ( (playerHand === 0 && iaHand === 2) || (playerHand === 1 && iaHand === 0) || (playerHand === 2 && iaHand === 1) ) {
        document.getElementById("scorePlayer").innerHTML = parseInt(document.getElementById("scorePlayer").innerHTML, 10) + 1;
    }else {
       document.getElementById("scoreOrdi").innerHTML = parseInt(document.getElementById("scoreOrdi").innerHTML, 10) + 1;
    }
    document.getElementById("choices").style.display = "block";
}

function resetGame() {
    document.getElementById("imgMain").src ="";
    document.getElementById("imgOrdi").src ="";
    document.getElementById("imgMain").style.display = "none";
    document.getElementById("imgOrdi").style.display = "none";
    document.getElementById("choices").style.display = "none";
    document.getElementById("scorePlayer").innerHTML = 0;
    document.getElementById("scoreOrdi").innerHTML = 0;
}
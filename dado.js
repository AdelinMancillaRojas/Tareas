var uno = 0;
var dos = 0;
var dados;
while (uno < 100 && dos < 100) {
    uno += avance();
    dos += avance();
    console.log("Jugador 1:", uno);
    console.log("Jugador 2:", dos);

    
   

}if(dos>=100 && uno>=100){
    console.log("Empate");
}
else if (uno > dos) {
    console.log("Gana uno");
}
else {
    console.log("Gana dos");
}



function dado() {
    return Math.ceil(Math.random() * 6);
}
function avance() {
    var cayo = dado();
    if (cayo == 1) {
        return 3;
    } else if (cayo < 4) {
        return 1;
    } else {
        return 2;
    }
}

var multiplo=-1;
var factorial=3;
var x = 1;
var sen = 1
var serier = 10;
for (var i = 1; i <= serier; i++) {
    sen+= (serie(factorial, x) * multiplo);
    multiplo *= -1;
    factorial += 2;
}

console.log(sen);

function serie(factorial, x) {
    var e = 1;
    var expo = 0;
    var resultado = 0;
    for(var i=1;i<=factorial;i++){
        e*=i;}
        expo=Math.pow(x,factorial);
        resultado=expo/e;
        return resultado;
}
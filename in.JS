var x=3;
var ser=2;
var exponete=1;
var inn=0;

for(var i=1;i<=ser;i++){
    inn+= serie(exponete, x);
    exponete++
}

console.log(inn);
function serie(factorial,x){
    var rep=(x-1)/x;
    var rsultado= Math.pow(rep,factorial);
    rsultado=(1/factorial)*rsultado;

    return rsultado;
}
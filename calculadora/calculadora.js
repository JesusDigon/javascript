var num1=0;
var num2=0;
var operador="";
var resul=0;
function ponernumero(num){
    if(document.form.pantalla.value==0){
        document.form.pantalla.value=num;
    }else{
        document.form.pantalla.value+=num;
    }
    return false;
}
function obtenerOperador(op){
    operador=op;
    num1=document.form.pantalla.value;
    document.form.pantalla.value=0;
    return false;
}
function Resolver(){
    num2=document.form.pantalla.value;
    switch(operador){
        case "+": resul=parseFloat(num1)+parseFloat(num2); break;
        case "-": resul=parseFloat(num1)-parseFloat(num2); break;
        case "*": resul=parseFloat(num1)*parseFloat(num2); break;
        case "/": resul=parseFloat(num1)/parseFloat(num2); break;
    }
    document.form.pantalla.value=resul;
    return false;
}

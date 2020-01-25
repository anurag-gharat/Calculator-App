function insert(num){
    document.form.textview.value=document.form.textview.value+num; 
}
function eqaulsto(){
    var equation=document.form.textview.value;
    if(equation){
        document.form.textview.value=eval(document.form.textview.value);
    }
}
function clean(){
    document.form.textview.value="";
}
function backspace(){
    var num = document.form.textview.value;
    document.form.textview.value=num.substring(0,num.length-1);
}
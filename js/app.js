$(function(){
            setTimeout(function(){
                $('.button').removeClass('hidden');
                $('.container').removeClass('hidden');
            }, 10);

});
//start of calculation js
var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
function addition(){
    var num1=document.getElementById('num1');
    var num2=document.getElementById('num2');
    if (num1==null || num2==null) {
        alert('No Null values allowed');
        
    } 
    else 
    {
     document.getElementById('answer').innerHTML="num1+num2";   
    }

}
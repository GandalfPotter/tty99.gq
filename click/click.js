var i=0;
var isZero=true;
//signs include positive '+': 1, negative '-': -1, kali '$': $1, kako '!': !1
var sign='+';
document.addEventListener('keyup', function keyDownCallback(event){
if(event.keyCode == 38){
i++; document.getElementById('counter').innerHTML=i;
}

if(event.keyCode == 40){
i--; document.getElementById('counter').innerHTML=i;
}
});

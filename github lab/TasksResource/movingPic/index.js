var img1=document.getElementById("img1");
 var img2=document.getElementById("img2");
 var img3=document.getElementById("img3");



function go()
{
 
var x=parseInt( img1.style.right);
setInterval(function()
{
    x+=10;
    img1.style.right=x+"px";
while(x>1400){
        x-=10;
        img1.style.right=x+"px";
 
}

console.log(x);
},50)







var x2=parseInt( img2.style.left);
setInterval(function()
{
    x2+=10;
    img2.style.left=x2+"px";
while(x2>1400){
        x-=10;
        img2.style.left=x2+"px";
 
}

console.log(x2);
},50)




var x3=parseInt( img3.style.bottom);
setInterval(function()
{
    x3+=10;
    img3.style.bottom=x3+"px";
while(x3>650){
        x3-=10;
        img3.style.bottom=x3+"px";
 
}

console.log(x3);
},50)

}
var div=document.getElementsByClassName("game");
var img1=document.getElementById("img1")
var img2=document.getElementById("img2")
var img3=document.getElementById("img3")
var img4=document.getElementById("img4")
var img5=document.getElementById("img5")
var img6=document.getElementById("img6")
var img7=document.getElementById("img7")
var img8=document.getElementById("img8")
var img9=document.getElementById("img9")
var img10=document.getElementById("img10")
var img11=document.getElementById("img11")
var img12=document.getElementById("img12")


console.log(div);



function game1(x){
img1.src="1.gif";
console.log(x.getAttribute("value"))

return x;
}


function game2(x){
    img2.src="2.gif";

    
    console.log(x.getAttribute("value"));
    return x;
    }
    
function game3(x){
    img3.src="3.gif";
    
    console.log(x.getAttribute("value"))
    return x;
    }
    
function game4(x){
    img4.src="4.gif";
    
    console.log(x.getAttribute("value"))
    return x;
    }
    
function game5(x){
    img5.src="5.gif";
    console.log(x.getAttribute("value"))
    return x;
    
    }

    function game6(x){
        img6.src="6.gif";
        console.log(x.getAttribute("value"))
        return x;
        
        }
    
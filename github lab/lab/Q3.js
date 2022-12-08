var p=document.getElementsByTagName("p")
var icon=document.getElementsByTagName("i");
var i=0;

// icon.getAttribute("class")
console.log(icon[0])



function overr(x){

// console.log(x.getAttribute("value"))
if(i<x.getAttribute("value"))
 { 
   for(i=0;i<x.getAttribute("value");i++)
   {


  
  icon[i].className=" fa-regular fa-star";   }
 // x.style.color="red"
 }
else if(i>=x.getAttribute("value")){
    icon.className=" fa fa-solid fa-star";
}
}

function leavee(x){

    x.className="fa fa-solid fa-star";
}


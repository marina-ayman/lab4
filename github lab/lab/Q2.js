
var parent =document.createElement("div");
var img=document.createElement("img");


img.setAttribute("src","R.gif");



parent.appendChild(img);
document.body.appendChild(parent);

img.style.width="10rem";


// ///////////////////////////////////////////////////////////////////////////////
// var insertedElement = parentElement.insertBefore(newElement, referenceElement);
// //   ^ returns         ^add to this element:      ^ this new element, ^ before this existing element.



// var g = document.createElement('div');
// g.class = 'insert'; 
// g.innerHTML="";



// var s = document.getElementsByClassName('parent');
// s.parentNode.insertBefore(g, s);

////////////////////////////////////////
var prag=document.createElement("p");





for(let i=0;i<6;i++){

    var img1=document.createElement("img");

    img1.setAttribute("src","R.gif");


    document.body.appendChild(prag);
    prag.appendChild(img1);
 
}



alert( prag.childNodes.length);

setInterval(function(){
    prag.removeChild(prag.firstChild)
},2000)
;

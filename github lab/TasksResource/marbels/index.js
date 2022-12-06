var imges=["marble2.jpg","marble3.jpg"]
var img=document.getElementsByTagName("img");
var i=0;
var x=0;   




function circle(){

// anthet answer


img[x].src=imges[i];
x++;

if(x>1)
{
    i=0;
 
    img[x].src="marble1.jpg"
  
}


i++;



// }


}
setInterval(circle,1000)








// for(let i=0;i<imges.length;i++)
// {
//        img[x].src=imges[i];
     
//        // if(i=2)
//        // {
//        //     i=0;
//        // }
//        x++;

//        img[i].src="marble1.jpg"
//    }




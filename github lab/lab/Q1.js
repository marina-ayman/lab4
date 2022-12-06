var fullnamee=document.getElementById("namee");
var pass1=document.getElementById("pass1");
var pass2=document.getElementById("pass2");


var validname=document.getElementsByClassName("p1");
var validpass=document.getElementsByClassName("p2");



function focuss(){

    fullnamee.style.border= "3px blue solid" ;
}


function bluur(){

    document.getElementById("namee").style.removeProperty("border") ;

    if(fullnamee.value.length<3){

        // validname.style.display="block";                           //?????????????????????????????????????????????
        // validname.style.color="red";
    

        document.getElementById("namee").onfocus();
          
  
    }

    else if (fullnamee.value.length>3)
      {  
        document.getElementsByClassName("p1").style.display="none";
}
}


function bluur1(){
    if (pass1===pass2) {
        document.getElementsByClassName("p2").style.display="none";
        
    }
    else if(!(pass1===pass2)){
        document.getElementsByClassName("p2").style.display="block";
        document.getElementsByClassName("p2").style.color="red"
    }

}

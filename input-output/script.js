window.onload=function(){
   anumber = 0;
   enumber = 0;
   inumber = 0;
   onumber = 0;
   unumber = 0;
   
}
let anumber;
let enumber;
let inumber;
let onumber;
let unumber;

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}


let line1Input = document.getElementById('line1-input');
line1Input.addEventListener('keydown', turnBlack1);

document.addEventListener('keydown', increment, false);

         function increment(event) {
            if(event.code==="KeyA"||event.code==="KeyE"||event.code==="KeyI"||event.code==="KeyO"||event.code==="KeyU"){
               console.log("vowel")
            }else{
               console.log("consonants")
               //anumber=-1
               //enumber=-1
               //inumber=-1
               //onumber=-1
               //unumber=-1
            }

            if(event.code==='KeyA'){
               if (anumber===4){
                  anumber = 4
               } else {
                anumber++;
               }
             }
            
            if(event.code==='KeyE'){
              if (enumber===4){
                 enumber = 4
              } else {
               enumber++;
              }
            }

            if(event.code==='KeyI'){
               if (inumber===4){
                  inumber = 4
               } else {
                inumber++;
               }
             }

             if(event.code==='KeyO'){
               if (onumber===4){
                  onumber = 4
               } else {
                onumber++;
               }
             }

             if(event.code==='KeyU'){
               if (unumber===4){
                  unumber = 4
               } else {
                unumber++;
               }
             }
            
         }

function turnBlack1(event) {
    let dont1 = document.querySelector('.dont-1');
    if (event.code === 'KeyO') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';
        


        var ochildren = document.getElementsByClassName("o-children");
        ochildren[onumber].style.display='block';
        // change highlight to black and text to white

        //if(onumber === -1){
         //ochildren[0].style.display='none';
         //ochildren[1].style.display='none';
         //ochildren[2].style.display='none';
        // ochildren[3].style.display='none';
   

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

      

     } else if (event.code === 'KeyE') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';
      
        var echildren = document.getElementsByClassName("e-children");
        echildren[enumber].style.display='block';
        

         

        //forEach(echildren) { 
        // echildren[i].style.display='block'; 
         
         
        // console.log("test")
        //}
        


        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyI') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var ichildren = document.getElementsByClassName("i-children");
        ichildren[inumber].style.display='block';

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyA') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var achildren = document.getElementsByClassName("a-children");
        achildren[anumber].style.display='block';

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyU') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var uchildren = document.getElementsByClassName("u-children");
        uchildren[unumber].style.display='block';

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
   

     } else {
        dont1.style.display = 'none';
        document.body.style.backgroundImage = ' url("img/cute-bg.jpg")';
        
        var element = document.getElementById("line1");
        element.style.color = "#000000";
        element.style.backgroundColor = "#ffffff";

     }

     

}

let line2Input = document.getElementById('line2-input');
line2Input.addEventListener('keydown', turnBlack2);

function turnBlack2(event) {
    let dont2 = document.querySelector('.dont-2');
    if (event.code === 'KeyO') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';
        
        var ochildren = document.getElementsByClassName("o-children");
        ochildren[onumber].style.display='block';

        // change highlight to black and text to white

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
       


     } else if (event.code === 'KeyE') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var echildren = document.getElementsByClassName("e-children");
        echildren[enumber].style.display='block';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyI') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var ichildren = document.getElementsByClassName("i-children");
        ichildren[inumber].style.display='block';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyA') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var achildren = document.getElementsByClassName("a-children");
        achildren[anumber].style.display='block';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyU') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var uchildren = document.getElementsByClassName("u-children");
        uchildren[unumber].style.display='block';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
   

     } else {
        dont2.style.display = 'none';
        document.body.style.backgroundImage = ' url("img/cute-bg.jpg")';
        
        var element = document.getElementById("line2");
        element.style.color = "#000000";
        element.style.backgroundColor = "#ffffff";

     }

     
    // console.log(event.code);
}


let line6Input = document.getElementById('line6-input');
line6Input.addEventListener('keydown', turnBlack3);

function turnBlack3(event) {
    let dont3 = document.querySelector('.dont-3');
    if (event.code === 'KeyO') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var ochildren = document.getElementsByClassName("o-children");
        ochildren[onumber].style.display='block';
        
        // change highlight to black and text to white

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
       


     } else if (event.code === 'KeyE') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var echildren = document.getElementsByClassName("e-children");
        echildren[enumber].style.display='block';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyI') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var ichildren = document.getElementsByClassName("i-children");
        ichildren[inumber].style.display='block';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyA') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var achildren = document.getElementsByClassName("a-children");
        achildren[anumber].style.display='block';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyU') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var uchildren = document.getElementsByClassName("u-children");
        uchildren[unumber].style.display='block';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
   

     } else {
        dont3.style.display = 'none';
        document.body.style.backgroundImage = ' url("img/cute-bg.jpg")';
        
        var element = document.getElementById("line6");
        element.style.color = "#000000";
        element.style.backgroundColor = "#ffffff";

     }

     

}
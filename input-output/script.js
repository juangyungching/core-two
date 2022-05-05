

// Dealing with Textarea Height
function calcHeight(value) {
  let numberOfLineBreaks = (value.match(/\n/g) || []).length;
  // min-height + lines x line-height + padding + border
  let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
  return newHeight;
}


let line1Input = document.getElementById('line1-input');
line1Input.addEventListener('keydown', turnBlack1);

function turnBlack1(event) {
    let dont1 = document.querySelector('.dont-1');
    if (event.code === 'KeyO') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';
        
        // change highlight to black and text to white

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
       


     } else if (event.code === 'KeyE') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyI') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyA') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line1");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyU') { 
        
        dont1.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

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
        
        // change highlight to black and text to white

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
       


     } else if (event.code === 'KeyE') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyI') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyA') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line2");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyU') { 
        
        dont2.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

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
        
        // change highlight to black and text to white

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";
       


     } else if (event.code === 'KeyE') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyI') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyA') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

        var element = document.getElementById("line6");
        element.style.color = "#ffffff";
        element.style.backgroundColor = "#000000";

     } else if (event.code === 'KeyU') { 
        
        dont3.style.display = 'inline';
        document.body.style.backgroundImage = ' url("img/ew-bg.jpg")';

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
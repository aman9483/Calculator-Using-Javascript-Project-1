const buttons = Array.from(document.querySelectorAll('button'));
let input = document.querySelector('#equal');
let display = document.querySelector('#textpart');
let clear = document.querySelector('#clr');
let back = document.querySelector('#back');

let calculator = (num) =>{

    display.value+=num;

    

}

input.addEventListener('click', e=>{

      switch(e.target.innerText){


         case '=':

         try{

            display.value = eval(display.value);
         }

         catch{

            display.value = "ERROR!";
         }

         break;
      }
});



clear.addEventListener('click', e=>{

    display.value = " ";
});


back.addEventListener('click', e=>{

    display.value = display.value.slice(0,-1);
});






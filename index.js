// Question.1
let Q1 = document.getElementById("text")

  console.log(Q1.innerHTML);



// Question.2
let Q2 = document.getElementsByTagName('h1');
function callM(){
    console.log(Q2[0].innerText);
console.log(Q2[1].innerText);
console.log(Q2[2].innerText);
}

// Question.3
let Q3 = document.getElementsByClassName('items');
function call(){
    console.log(Q3[0] .innerText);

}
// Question.4

let Q4 = document.getElementsByTagName('h1');
let newQ4 = "Hello World";
function cal(){
    console.log(Q4);
    Q4[3].innerText = newQ4;
}

// Question.5

let Q5 = document.getElementById('item');
let newQ5 = "Welcome to Elevation academy";
function callMe(){
    console.log(Q5.innerHTML);
    Q5.innerText = newQ5;
}

// Question.6
let Q6 = document.querySelector('.h1')
 function chang(){
    console.log(Q6)
    Q6.setAttribute('style','color:red')
}

// Question.7
let Q7 = document.querySelector('.bigbox')
let count = 0
   function box(){
      if(count %2===0){
      Q7.setAttribute('style','flex-direction: column')
      console.log(Q7)
      count++
      }
      else{
        Q7.setAttribute('style','flex-direction: row')
      console.log(Q7)
      count++
      }

   }
    

// Question.9
let t = document.getElementsByTagName('h1');
function Time(){
    let time = new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
   if(hour>12){
    hour = hour -12;
   }
   console.log(hour,mins,secs);
   
   t[0].innerText = hour;
   t[1].innerText = mins;
   t[2].innerText = secs;
}





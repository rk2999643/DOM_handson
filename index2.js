let count =100;
let highscore=null;
let randomnumber = Math.floor(Math.random()*100);
// console.log(randomnumber)


function check(){
     let input = document.querySelector('.num').value
     if(count!==0){
        if(input>randomnumber){
            document.querySelector('#mesg').textContent="Your Guess is High"
            count--
            document.querySelector('#left').textContent= count
       }
      else if(input<randomnumber){
        document.querySelector('#mesg').textContent="Your Guess is Low"
        count--
        document.querySelector('#left').textContent= count
       }
       else{
        document.querySelector('#mesg').textContent="🤩🤩 Hurray You Won 🤩🤩"
        document.body.style.backgroundColor="green"
        count--
        document.querySelector('#left').textContent= count
        document.querySelector('#box').textContent= randomnumber;
        highscore = count
        document.querySelector('#score').textContent= highscore
      }

    }else{
        document.querySelector('#mesg').textContent= "Game Over your score is 0"

    }

}
function reload(){
    document.getElementById('.num');
    document.querySelector('#score');
    document.querySelector('#mesg').textContent="Start guessing..."
    document.querySelector('#box').textContent="?";
    randomnumber = Math.floor(Math.random()*100+1);
    document.body.style.backgroundColor="black";

}
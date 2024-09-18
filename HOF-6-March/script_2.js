/*
    Random Number Generator with Delay and Progress Indication:
    -> The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
    variable so can be modified. The program displays a message every second indicating the time remaining
    until the random number is generated and then outputs the generated number.
*/

const delay = 3000;

function generateRandomNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number is : ", randomNumber)
}

let remainingTime = delay/1000;
let countInterval = setInterval(() => {
    if(remainingTime > 0){
        console.log(`Time remaining ${remainingTime} seconds.`);
        remainingTime--;
    }else{
        clearInterval(countInterval);
        generateRandomNumber();
    }
}, 1000);
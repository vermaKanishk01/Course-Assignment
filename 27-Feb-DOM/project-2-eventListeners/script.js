// onclick

const boxOnePara = document.getElementById("boxOne-para");
const boxOneResult = document.getElementById("boxOne-result");

boxOnePara.addEventListener("click", function(){
    boxOnePara.style.display = "none";
    boxOneResult.textContent = "🍇 🍈 🍉 🍊 🍋 🍋‍🟩 🍐 🍏 🍎 🥭 🍍"
});

// dblClick

const boxTwoPara = document.getElementById("boxTwo-para");
const boxTwo = document.getElementById("boxTwo");

boxTwo.addEventListener("dblclick", function(){
    boxTwoPara.textContent = "doubleClick event is working properly 👍"
});

// mouseover and mouseout

const boxThree = document.getElementById("box-3");

boxThree.addEventListener("mouseover", function(){
    boxThree.style.backgroundColor = "green";
});
boxThree.addEventListener("mouseout", function(){
    boxThree.style.backgroundColor = "red";
})

// keyPress

const inputBox = document.getElementById("input-box");
const display = document.getElementById("display");

inputBox.addEventListener("keypress", function(e){
    display.textContent = "you have pressed " + e.key;
})

// keyup and keydown
const result = document.getElementById("result");
const inputBoxTwo = document.getElementById("input-boxTwo");

inputBoxTwo.addEventListener("keydown", function(e){
    result.style.color = "red";
    result.innerText = e.key + "is keyDown";
});
inputBoxTwo.addEventListener("keyup", function(e){
    result.style.color = "green";
    result.innerText = e.key + "is keyUp";
})
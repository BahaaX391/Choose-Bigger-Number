"use strict";
let btns = document.querySelectorAll(".container .randomNums div button");
let btn1:Element = document.querySelector(".container .randomNums div .fBtn");
let btn2:Element = document.querySelector(".container .randomNums div .sBtn");
let scoreBtn = document.querySelector(".container .score");
let score = 0;
function generateRandomNuumber1() {
    let firstNum = Math.round(Math.random() * 100);
    btn1.textContent = firstNum.toString();
    btn1.setAttribute("value",firstNum);
    
}
function generateRandomNuumber2() {
    let secondNum = Math.round(Math.random() * 100);
    btn2.textContent = secondNum.toString();
    
    btn2.setAttribute("value",secondNum);
}

window.onload = generateRandomNuumber2();
window.onload = generateRandomNuumber1();

function compare1()
{
    ;
    if((parseInt(btn1.getAttribute("value"))) > (parseInt(btn2.getAttribute("value"))))
        {
            
            generateRandomNuumber1();
            generateRandomNuumber2();
            score++;
            scoreBtn.textContent = score;
            
        }
        else  if(score > 0)
            {
                generateRandomNuumber1();
                generateRandomNuumber2();
            score--;
            scoreBtn.textContent = score;
            }
}


function compare2()
{
    ;
    if((parseInt(btn2.getAttribute("value"))) > (parseInt(btn1.getAttribute("value"))))
        {

            generateRandomNuumber1();
            generateRandomNuumber2();
            score++;
            scoreBtn.textContent = score;
        }else  if(score > 0)
            {
                generateRandomNuumber1();
                generateRandomNuumber2();
            score--;scoreBtn.textContent = score;


            }
}




btn1.addEventListener("click",compare1);
btn2.addEventListener("click",compare2);


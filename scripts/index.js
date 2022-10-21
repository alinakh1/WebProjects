"use strict";

window.onload = init;

function init() 
{
    const addButton = document.getElementById("addButton");
    addButton.onclick = addButtonOnClick;
    const substractButton = document.getElementById("substractButton");
    substractButton.onclick = substractButtonOnClick;
    const multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.onclick = multiplyButtonOnClick;
    const divideButton = document.getElementById("divideButton");
    divideButton.onclick = divideButtonOnClick;
}

function addButtonOnClick()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1AsString = number1Field.value;
    let num2AsString = number2Field.value;

    let num1AsNumber = Number(num1AsString);
    let num2AsNumber = Number(num2AsString);

    let answer = num1AsNumber + num2AsNumber;

    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}

function substractButtonOnClick()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1AsString = number1Field.value;
    let num2AsString = number2Field.value;

    let num1AsNumber = Number(num1AsString);
    let num2AsNumber = Number(num2AsString);

    let answer = num1AsNumber - num2AsNumber;

    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}

function multiplyButtonOnClick()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1AsString = number1Field.value;
    let num2AsString = number2Field.value;

    let num1AsNumber = Number(num1AsString);
    let num2AsNumber = Number(num2AsString);

    let answer = num1AsNumber * num2AsNumber;

    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}

function divideButtonOnClick()
{
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");

    let num1AsString = number1Field.value;
    let num2AsString = number2Field.value;

    let num1AsNumber = Number(num1AsString);
    let num2AsNumber = Number(num2AsString);

    let answer = num1AsNumber / num2AsNumber;

    const answerField = document.getElementById("answerField");
    answerField.value = answer;
}
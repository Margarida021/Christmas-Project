"use strict";

//grab button
//change the names
const letterForm = document.getElementById("letter-form");
const name = document.getElementById("letter-name");
const letterContent = document.getElementById("letter-content");
const inputName = document.getElementById("name-input");

const postCards = [
  {
    name: "Shiball",
    text: "Hello",
  },
  {
    name: "alaia",
    text: "Good",
  },
  {
    name: "Leilahnny",
    text: "Maybe",
  },
  {
    name: "Boop",
    text: "Ihih",
  },
  {
    name: "Zacarias",
    text: "Zakinhaaaaa",
  },
];

//listen to event on submit in form element we need to prevent the load and we need to show the card
//the card will need to compare the name inserted on the input and reveal the content
//see if it is the same either with capital letter (begining) or not. Ex. Shiball and shiball should work both.
//transform the first letter of the name always to capital.
letterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  for (let i = 0; i < postCards.length; i++) {
    if (inputName.value === postCards[i].name) {
      console.log("Got the name!");
      name.textContent = postCards[i].name;
      letterContent.textContent = postCards[i].text;
      break;
    } else {
      const randomArr = ["Hello", "Goodbye", "Pink"];
      console.log("Outro nome aqui");
      name.textContent = inputName.value;
      letterContent.textContent = randomArr[2];
    }
    letterForm.classList.add("hidden");
  }
});

//a restart button?

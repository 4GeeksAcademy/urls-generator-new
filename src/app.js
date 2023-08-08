/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const pronouns = ["the", "my", "your"];
  const adjectives = ["big", "small", "tall"];
  const nouns = ["house", "car", "dog"];
  const urls = [".com", ".net", ".es"];

  const combinations = [];

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const url of urls) {
          const combination = `${pronoun}${adjective}${noun}${url}`;
          combinations.push(combination);
        }
      }
    }
  }

  const ul = document.getElementById("combinations");

  ul.innerHTML = "";

  for (const combination of combinations) {
    const li = document.createElement("li");
    li.textContent = combination;
    ul.appendChild(li);
  }
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My cat",
    "My mom"
  ];
  let action = ["ate", "peed", "crushed", "broke", "lost"];
  let what = ["my homework", "my phone", "the car", "my tv", "my book"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "after the dance",
    "during my travel"
  ];

  let arm = GetRandom(who);
  let arm2 = GetRandom(action);
  let arm3 = GetRandom(what);
  let arm4 = GetRandom(when);

  document.querySelector("#excuse").innerHTML =
    who[arm] + " " + action[arm2] + " " + what[arm3] + " " + when[arm4];
};

function GetRandom(array) {
  return Math.floor(Math.random() * array.length);
}

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

  let arm = Math.floor(Math.random() * who.length);
  let arm2 = Math.floor(Math.random() * action.length);
  let arm3 = Math.floor(Math.random() * what.length);
  let arm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[arm] + " " + action[arm2] + " " + what[arm3] + " " + when[arm4];
};
//write your code here

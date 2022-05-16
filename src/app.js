/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "telecom", "supercabinet"];
let ext = [".com", ".net"];
let domain = "";

const DomainGenerator = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let z = 0; z < noun.length; z++) {
        for (let y = 0; y < ext.length; y++) {
          domain += `<li>${pronoun[i] + adj[j] + noun[z] + ext[y]}</li>`;
        }
      }
    }
  }
  return domain;
};
document.querySelector(".list").innerHTML = DomainGenerator();

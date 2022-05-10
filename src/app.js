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
let words = [];

const DomainGenerator = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let z = 0; z < noun.length; z++) {
        for (let y = 0; y < ext.length; y++) {
          let domain = `${pronoun[i] + adj[j] + noun[z] + ext[y]}`;

          document.write(`<li class="text-center mt-2">${domain}</li>`);
        }
      }
    }
  }
};
DomainGenerator();

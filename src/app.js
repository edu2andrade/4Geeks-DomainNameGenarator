/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Ya lo habia hecho en app.js que estaba en el root :)
  let pronouns = ["the", "our"];

  let adjs = ["great", "big"];

  let nouns = ["jogger", "racoon"];

  let domainList = [".com", ".es", ".co.uk", ".pt", ".com.br"];

  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        domainList.forEach(domain => {
          console.log(`${pronoun}${adj}${noun}${domain}`);
        });
      });
    });
  });
};

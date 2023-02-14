let pronouns = ["the", "our"];

let adjs = ["great", "big"];

let nouns = ["jogger", "racoon"];

pronouns.forEach((pronoun) => {
  adjs.forEach((adj) => {
    nouns.forEach((noun) => {
      console.log(`${pronoun}${adj}${noun}.com`);
    });
  });
});

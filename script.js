const d = document;

const textareaEl = d.querySelector(".textarea");
const word = d.querySelector(".stat__number--word");
const character = d.querySelector(".stat__number--characters");
const twitter = d.querySelector(".stat__number--twitter");
const facebook = d.querySelector(".stat__number--facebook");

textareaEl.addEventListener("input", () => {
  let wordsqty = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    wordsqty = 0;
  }
  const charValue = textareaEl.value.length;
  character.textContent = charValue;
  const twitterChar = 280;
  const twitterNumber = (twitter.textContent = twitterChar - charValue);
  if (+twitterNumber < 0) {
    twitter.classList.add("red");
  } else {
    twitter.classList.remove("red");
  }
  const fbChar = 2200;
  const fbNumber = (facebook.textContent = fbChar - charValue);
  if (+fbNumber < 0) {
    facebook.classList.add("red");
  } else {
    facebook.classList.remove("red");
  }
  word.textContent = wordsqty;
});

const userInput = document.querySelector("#userinput");
const btn = document.querySelector("#btn");
// building a letter frequency
const letterFrequency = (phrase) => {
  console.log(phrase);

  // make a frequency object
  let frequency = {};
  for (const letter of phrase) {
    // check if letter exists in frequency
    // if letter exists add it by one
    // otherwise set the value to 1
    if (letter in frequency) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

// building a word frequency using the letter frequency
const wordFrequency = (phrase) => {
  let frequency = {};

  words = phrase.split(" ");
  for (const word of words) {
    if (word in frequency) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
};

function getNshow() {
  if (userInput.value === "") {
    alert("write");
  } else {
    console.log(wordFrequency(userInput.value));
    userInput.value = ''
  }
}

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

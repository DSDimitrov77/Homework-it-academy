
const sentenceInput = document.getElementById("sentence-input");
const resultElement = document.getElementById("result");


function handleFormSubmit(event) {
  
  event.preventDefault();

 
  const sentence = sentenceInput.value;
  const words = sentence.split(" ");

  
  if (words.length === 0) {
    alert("Please enter a sentence.");
    return;
  }

 
  words.sort();

  
  const wordCounts = {};
  words.forEach(word => {
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });

 
  let resultString = "Sorted words: " + words.join(", ");
  resultString += "<br>Word count: " + words.length;
  resultString += "<br>Word counts:";
  for (const [word, count] of Object.entries(wordCounts)) {
    resultString += `<br>${word}: ${count}`;
  }

 
  resultElement.innerHTML = resultString;
}


const form = document.getElementById("sentence-form");
form.addEventListener("submit", handleFormSubmit);

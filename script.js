const outputEl = document.getElementById('output');
const generateBtn = document.getElementById('generate-btn');
const numSentencesInput = document.getElementById('num-sentences');

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue.';

function generateLoremIpsum(numSentences) {
  let sentences = loremIpsum.split('. ');
  sentences.length = sentences.length - 1; // remove last empty element
  let output = '';
  for (let i = 0; i < numSentences; i++) {
    let randIndex = Math.floor(Math.random() * sentences.length);
    output += sentences[randIndex] + '. ';
  }
  return output;
}

generateBtn.addEventListener('click', () => {
  let numSentences = parseInt(numSentencesInput.value);
  if (numSentences > 1000) {
    numSentences = 1000;
    numSentencesInput.value = numSentences;
  }
  let output = generateLoremIpsum(numSentences);
  outputEl.textContent = output;
});

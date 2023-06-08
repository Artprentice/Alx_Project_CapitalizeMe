window.addEventListener('DOMContentLoaded', (event) => {
  // Get the necessary DOM elements
  const inputText = document.getElementById('inputText');
  const capitalizeButton = document.getElementById('capitalizeButton');
  const outputText = document.getElementById('outputText');

  // Add event listener to the capitalize button
  capitalizeButton.addEventListener('click', () => {
    // Get the input text value
    const text = inputText.value;

    // Capitalize and punctuate the text
    const capitalizedText = capitalizeAndPunctuate(text);

    // Set the capitalized text as the output
    outputText.textContent = capitalizedText;
  });

  // Function to capitalize and punctuate the text
  function capitalizeAndPunctuate(text) {
    // Split the text into sentences
    const sentences = text.split('. ');

    // Capitalize the first letter of each sentence and add a period
    const capitalizedSentences = sentences.map(sentence => {
      const capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
      return capitalizedSentence + '.';
    });

    // Join the sentences back into a single string
    const capitalizedText = capitalizedSentences.join(' ');

    return capitalizedText;
  }
});

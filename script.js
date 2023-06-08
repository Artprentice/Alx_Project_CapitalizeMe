function capitalizeAndPunctuate() {
  var input = document.getElementById('inputText').value;

  // Capitalize articles and punctuate sentences
  var capitalizedText = input.replace(/(\.\s+|^)([a-z])/g, function(match, p1, p2) {
    return p1 + p2.toUpperCase();
  });

  document.getElementById('outputText').textContent = capitalizedText;
}

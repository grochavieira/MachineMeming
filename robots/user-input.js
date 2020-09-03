const readline = require("readline-sync");

function robot(content) {
  content.postType = askAndReturnPostType();
  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = false;

  if (content.postType === 1) {
    content.prefix = askAndReturnPrefix();
  }

  function askAndReturnPostType() {
    const postType = [
      "Use a search term for images and type by hand the post content",
      "Use a search term for images and to generate texts",
    ];
    const selectedPostType = readline.keyInSelect(
      postType,
      `Choose how the post will be generated:`
    );

    console.log(selectedPostType);

    return selectedPostType;
  }

  function askAndReturnSearchTerm() {
    return readline.question("Type a search term: ");
  }

  function askAndReturnPrefix() {
    const prefixes = ["Who is", "What is", "The history of"];
    const selectedPrefixIndex = readline.keyInSelect(
      prefixes,
      `Choose one option for ${content.searchTerm}:`
    );

    return prefixes[selectedPrefixIndex];
  }
}

module.exports = robot;

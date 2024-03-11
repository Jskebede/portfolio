const textArea = document.getElementById("quote");

async function fetchQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();

  const quoteText = data.content;
  const quoteAuthor = data.author;

  textArea.textContent = `"${quoteText}" -- ${quoteAuthor}`;
}

function pickQuote() {
  var len = quotes.length;
  var choice = Math.floor(Math.random() * len);
  var quote = quotes[choice];
  $("#quote").text('"' + quote.quote + '"');
  $("#author").text("-" + quote.author);
}

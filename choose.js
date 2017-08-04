window.onload = function() {
  pickQuote(0);
  var a = document.getElementById("button");
  a.onclick = function() {
    pickQuote(null);
    return false;
  }
}

function pickQuote(choice) {
  var len = quotes.length;
  if (choice === null) {
    choice = Math.floor(Math.random() * len);
  }
  var quote = quotes[choice];
  $("#number").text((choice + 1).toString() + " / " + len.toString());
  $("#quote").text('"' + quote.quote + '"');
  $("#author").text("-" + quote.author);
}

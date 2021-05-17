/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [{quote: "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.", source: "Dr. Seuss"}
  ,{quote: "For every minute you are angry you lose sixty seconds of happiness.", source: "Ralph Waldo Emerson"}
  ,{quote: "Love is like the wind, you can't see it but you can feel it.", source: "Nicholas Sparks", citation: "A Walk to Remember", year: 1999}
  ,{quote: "Things change. And friends leave. Life doesn't stop for anybody.", source: "Stephen Chbosky"}
  ,{quote: "But better to get hurt by the truth than comforted with a lie.", source: "Khaled Hosseini"}]; //Creating quotes array with multiple Quote object



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * 4); //random number generator 0 to 4
  var randomQuote = quotes[randomNum];
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote() {
  var quote = getRandomQuote();
  console.log(quote);
  var htmlString = "<p class=\"quote\">" + quote.quote + "</p>";
  htmlString = htmlString.concat("<p class=\"source\">" + quote.source);
  if (quote.hasOwnProperty("citation")) //Check if object has citation property
    htmlString = htmlString.concat("<span class=\"citation\">" + quote.citation + "</span>");
  if (quote.hasOwnProperty("year")) //Check if object has year property
   htmlString = htmlString.concat("<span class=\"year\">" + quote.year + "</span>");
  htmlString = htmlString.concat("</p>");
  document.getElementById('quote-box').innerHTML = htmlString;
  console.log(htmlString);
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
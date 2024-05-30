var array = [
    {
      quotes: `“Be yourself; everyone else is already taken.”
  `,
      name: "Oscar Wilde",
    },
    {
      quotes: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
      name: "Marilyn Monroe",
    },
    {
      quotes: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
      name: "Albert Einstein",
    },
    { quotes: `“So many books, so little time.”`, name: "Frank Zappa" },
    {
      quotes: `“A room without books is like a body without a soul.”`,
      name: "Marcus Tullius Cicero",
    },
    {
      quotes: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
      name: "Bernard M. Baruch",
    },
    {
      quotes: `“You've gotta dance like there's nobody watching,
  Love like you'll never be hurt,
  Sing like there's nobody listening,
  And live like it's heaven on earth.”`,
      name: "William W. Purkey",
    },
    {
      quotes: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
      name: "Dr. Seuss",
    },
    {
      quotes: `“You only live once, but if you do it right, once is enough.”`,
      name: "Mae West",
    },
    {
      quotes: `“Be the change that you wish to see in the world.”`,
      name: "Mahatma Gandhi",
    },
    {
      quotes: `“In three words I can sum up everything I've learned about life: it goes on.”`,
      name: "Robert Frost",
    },
    {
      quotes: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
      name: "J.K. Rowling",
    },
    {
      quotes: `“Don’t walk in front of me… I may not follow
  Don’t walk behind me… I may not lead
  Walk beside me… just be my friend”`,
      name: "Albert Camus",
    },
    {
      quotes: `“If you tell the truth, you don't have to remember anything.”`,
      name: "Mark Twain",
    },
    {
      quotes: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`,
      name: "C.S. Lewis",
    },
    {
      quotes: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
      name: "Maya Angelou",
    },
    {
      quotes: `“A friend is someone who knows all about you and still loves you.”`,
      name: "Elbert Hubbard",
    },
    {
      quotes: `“To live is the rarest thing in the world. Most people exist, that is all.”`,
      name: "Oscar Wilde",
    },
    {
      quotes: `“Always forgive your enemies; nothing annoys them so much.”`,
      name: "Oscar Wilde",
    },
    {
      quotes: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
      name: "Martin Luther King",
    },
    {
      quotes: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
      name: "Mahatma Gandhi",
    },
  ],
  favoritQuoteList = [];
  document.getElementById("button").innerText = "Start Quote";
function randomQuote() {

  document.getElementById("Name").innerText =
    array[Math.floor(Math.random() * 21)].name;
  document.getElementById("Quote").innerText =
    array[Math.floor(Math.random() * 21)].quotes;
  document.getElementById("button").innerText = "New Quote";
  document.getElementById("fav").classList.replace("d-block", "d-none");
}
function favorit() {
  var  favoritQuoteItem = { };
  favoritQuoteItem.name = document.getElementById("Name").innerText;
  favoritQuoteItem.quote = document.getElementById("Quote").innerText;
  favoritQuoteList.push(favoritQuoteItem);
  document.getElementById("fav").classList.replace("d-none", "d-block");
}
function displayfav() {
  document.getElementById(
    "mobile"
  ).innerHTML = `<h1 class="text-danger">Favorit Quote</h1> `;
  for (var index = 0; index < favoritQuoteList.length; index++) {
    document.getElementById("mobile").innerHTML += ` 
        <p id="Quote" class="fs-5">${favoritQuoteList[index].quote}</p>
         <h2 id="Name" class="fs-6">${favoritQuoteList[index].name}<</h2>
         `;
  }
  document.getElementById(
    "mobile"
  ).innerHTML += ` <button class="btn btn-outline-danger " onclick="displayQuote()">Start Quote</button> `;
}
function displayQuote() {
  
    document.getElementById("mobile").innerHTML=`
    <i id="fav" class="fa-regular fa-heart fa-beat fa-2xl position-absolute start-0 end-0 text-danger d-none"></i>
        <h1 class="text-danger">Quote of the Day</h1> 
        <p id="Quote" ></p>
         <h2 id="Name"></h2>
        <button class="btn btn-outline-dark mb-3" onclick="randomQuote()" id="button"></button> 

        <button class="btn btn-outline-danger " onclick="displayfav()" id="button">Favorit Quote</button> 
`; 
 randomQuote() ;
}

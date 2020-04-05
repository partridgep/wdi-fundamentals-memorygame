//creating array of cards
let cards = [
  {
  	rank: "queen",
  	suit: "hearts",
  	cardImage: "images/queen-of-hearts.png"
  },
  {
  	rank: "queen",
  	suit: "diamonds",
  	cardImage: "images/queen-of-diamonds.png"
  },
  {
  	rank: "king",
  	suit: "hearts",
  	cardImage: "images/king-of-hearts.png"
  },
  {
  	rank: "king",
  	suit: "diamonds",
  	cardImage: "images/king-of-diamonds.png"
  }
];

//array of cards that are in play, empty at first
let cardsInPlay = [];

//checking if two cards match
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
  }
  else {
	//if they don't match
	alert("Sorry, try again.");
  }
}

//all steps that should happen when the user flips a card
function flipCard(cardId) {
  console.log("User flipped "+cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  //checking if player picked two cards
  if (cardsInPlay.length === 2) {
  checkForMatch();
  }
}

//simulating player flipping 2 cards
flipCard(0);
flipCard(2);


  
 	 





	

//creating array of cards
let cards = ['queen', 'queen', 'king', 'king'];

//array of cards that are in play, empty at first
let cardsInPlay = [];

//checking if two cards match
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
  }
  else {
	//if they don't match
	console.log("Sorry, try again.");
  }
}

//all steps that should happen when the user flips a card
function flipCard(cardId) {
  console.log("User flipped "+cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  //checking if player picked two cards
  if (cardsInPlay.length === 2) {
  checkForMatch();
  }
}

//simulating player flipping 2 cards
flipCard(0);
flipCard(2);


  
 	 





	

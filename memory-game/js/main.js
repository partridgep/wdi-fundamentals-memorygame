//creating array of cards
let cards = ['queen', 'queen', 'king', 'king'];

//array of cards that are in play, empty at first
let cardsInPlay = [];

//selecting first and third cards
let cardOne = cards[0];
let cardTwo = cards[2];

//pushing selected cards into array of cards in play
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardOne);
console.log(cardTwo);

//checking if player picked two cards
if (cardsInPlay.length === 2) {
	//checking if two cards match
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else {
	//if they don't match
	alert("Sorry, try again.")
}
}			

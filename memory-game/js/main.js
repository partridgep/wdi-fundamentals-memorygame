//keep track of game score

//initial score is 0
let score = 0;

//updating score function
function updateScore(newScore) {
	let currentScore = document.getElementById('score');
	currentScore.textContent = "SCORE = "+newScore;
}

updateScore(score);



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
	score += 1;
	updateScore(score);
  }
  else if (cardsInPlay[0] !== cardsInPlay[1]){
	//if they don't match
	alert("Sorry, try again.");
  }
}

//all steps that should happen when the user flips a card
function flipCard() {
  //get data-id attribute of card clicked and store in var cardId
  let cardId = this.getAttribute('data-id');
  console.log("User flipped "+cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  //update src attribute to image of card that was just clicked
  this.setAttribute('src', cards[cardId].cardImage);
  //checking if player picked two cards
  if (cardsInPlay.length === 2) {
  checkForMatch();
  }
}

//create a new game board
function createBoard() {
	//loop through cards array
	for (let i = 0; i < cards.length; i++) {
		//create an img element and store it in a variable cardElement
		let cardElement = document.createElement('img');
		//add src attribute of 'images/back.png' for user to see back of card
		cardElement.setAttribute('src', 'images/back.png');
		//set card's data id attribute to be current index of card array
		cardElement.setAttribute('data-id', i);
		//add click event so that when user clicks on card, flipCard function is called
		cardElement.addEventListener('click', flipCard);
		//append cardElement to game board
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

//reset after playing

//select the button element
let resetButton =  document.querySelector('button');
//function to use once reset button is clicked
function resetGame() {
	    //select all images
		let allCards = document.querySelectorAll('img');
		//for every card, reset image attribute to back of card
		for (let i = 0; i < allCards.length; i++) {
		  allCards[i].setAttribute('src', 'images/back.png');
	}
}
//listen to click for reset function
resetButton.addEventListener('click', resetGame);
  
 	 





	

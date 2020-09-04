//Assign one image to a click event - fill one of spaces with one of the images
//if the square is not already filled
//Start with X, alterante thereafter
// DOM content loaded event listener
// Click event would trigger, take div's id and update the
//id in css to include the background image
//addEvent Listener for each ind. space and the div has a class square, iterate through nodelist with forEach
//- can call the click on each ind square

window.addEventListener("DOMContentLoaded", () => {
    //Top-leve Variables
	let counter = 0; //          //
    let sqrArray = ["", "", "", "", "", "", "", "", ""];
    let gameStatus = '';
    
    

        //Tie checker Function
    function tieChecker() {
        for (let i = 0; i < sqrArray.length; i++) {
            if (gameStatus === '' && sqrArray[i] !== '') {
                console.log("It's a tie!!");

            }
        }
    }
    
    //////////Phase 2 ///////////
	const squareClass = document.querySelectorAll(".square");
	squareClass.forEach((square) => {
		square.addEventListener("click", (e) => {
			const clickedSquare = e.target.id[e.target.id.length - 1];

			if (e.target.style.backgroundImage) {
				return;
			}
			if (counter % 2 === 0) {
				const img = document.createElement("img");
				img.src =
					"https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg";
				e.target.appendChild(img);

				sqrArray[clickedSquare] = "x";
			} else {
				const img = document.createElement("img");
				img.src =
					"https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg";
				e.target.appendChild(img);

				sqrArray[clickedSquare] = "o";
			}
			counter++;
            console.log(sqrArray);
            //create function to see if the board is full 
            //if board is full, and checkGameStatus function hasn't returned a winner, then return a tie
            checkGameStatus();
            tieChecker();
            console.log(gameStatus);
		});
	});

	/////////Phase 3 ////////////////

	const checkGameStatus = (array) => {
		if (
			sqrArray[0] === sqrArray[1] &&
			sqrArray[1] === sqrArray[2] &&
			sqrArray[2] !== ""
		) {
			gameStatus = sqrArray[0].toUpperCase();
		} else if (
			sqrArray[3] === sqrArray[4] &&
			sqrArray[4] === sqrArray[5] &&
			sqrArray[5] !== ""
		) {
			gameStatus = sqrArray[3].toUpperCase();
		} else if (
			sqrArray[6] === sqrArray[7] &&
			sqrArray[7] === sqrArray[8] &&
			sqrArray[8] !== ""
		) {
			gameStatus = sqrArray[6].toUpperCase();
		} else if (
			sqrArray[0] === sqrArray[3] &&
			sqrArray[3] === sqrArray[6] &&
			sqrArray[6] !== ""
		) {
			gameStatus = sqrArray[0].toUpperCase();
		} else if (
			sqrArray[1] === sqrArray[4] &&
			sqrArray[4] === sqrArray[7] &&
			sqrArray[7] !== ""
		) {
			gameStatus = sqrArray[1].toUpperCase();
		} else if (
			sqrArray[2] === sqrArray[5] &&
			sqrArray[5] === sqrArray[8] &&
			sqrArray[8] !== ""
		) {
			gameStatus = sqrArray[2].toUpperCase();
		} else if (
			sqrArray[0] === sqrArray[4] &&
			sqrArray[4] === sqrArray[8] &&
			sqrArray[8] !== ""
		) {
			gameStatus = sqrArray[0].toUpperCase();
		} else if (
			sqrArray[2] === sqrArray[4] &&
			sqrArray[4] === sqrArray[6] &&
			sqrArray[6] !== ""
		) {
			gameStatus = sqrArray[2].toUpperCase();
        } 
        else {
            console.log("Continue playing");
        }
        
	

		//check to make sure that none of the array indices are an empty string -only way to tie
		//do in a for loop?
	};
});

//Assign one image to a click event - fill one of spaces with one of the images
//if the square is not already filled
//Start with X, alterante thereafter
// DOM content loaded event listener
// Click event would trigger, take div's id and update the
//id in css to include the background image
//addEvent Listener for each ind. space and the div has a class square, iterate through nodelist with forEach
//- can call the click on each ind square

window.addEventListener("DOMContentLoaded", () => {
	const squareClass = document.querySelectorAll(".square");
	let counter = 0;
	let sqrArray = ["", "", "", "", "", "", "", "", ""];
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
		});
	});
});

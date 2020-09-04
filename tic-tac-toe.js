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
    let sqrArray = ['','','','','','','','',''];
	squareClass.forEach((square) => {
		square.addEventListener("click", (e) => {
            if(e.target.style.backgroundImage){
            return 
            }
            if(counter % 2 ===0) {
                e.target.style.backgroundImage = "url('/player-x.svg')";
                sqrArray.pop();
                sqrArray.unshift('x');
            }
            else {
                e.target.style.backgroundImage = "url('/player-o.svg')";
                sqrArray.pop();
                sqrArray.unshift('o');
            }
            counter++;
            console.log(sqrArray);
        })
		
	
})
});

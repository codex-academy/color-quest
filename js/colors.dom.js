const addBtn = document.querySelector(".addBtn");
const filterBtn = document.querySelector(".filterBtn");
const errorMessage = document.querySelector(".error");
const shapes = document.querySelector(".shapes");
const selectColor = document.querySelector(".selectColor");
const selectNumber = document.querySelector(".selectNumber");

function clearError() {
	setTimeout(function () {
		errorMessage.innerHTML = "";
	}, 2000);
}

addBtn.addEventListener("click", function () {

	const currentColor = selectColor.value;
	const currentNumber = selectNumber.value;

	if (currentColor === "" || currentNumber === "") {
		errorMessage.innerHTML = "Select a color & number!"
		clearError();
		return;
	}

	// create a new div element
	const newShape = document.createElement("div");
	newShape.classList.add("shape");
	newShape.classList.add("square");
	newShape.classList.add(currentColor);

	const newNumber = document.createElement("div");
	newNumber.innerHTML = currentNumber;
	newNumber.classList.add("number");
	newShape.appendChild(newNumber);

	// append the new element into the shapes
	shapes.appendChild(newShape);

});

filterBtn.addEventListener("click", function () {

	const theShapes = document
		.querySelectorAll(".shape");
	const currentSelectedColor = selectColor.value;

	// showAll
	for (var i = 0; i < theShapes.length; i++) {
		var currentShape = theShapes[i];
		currentShape.classList.remove("hidden");
	}

	// ensure a color value is selected
	if (currentSelectedColor !== "") {
		// filter
		for (var i = 0; i < theShapes.length; i++) {
			var currentShape = theShapes[i];
			// check if my current shape is the color that's selected in the dropdown
			if (!currentShape.classList.contains(currentSelectedColor)) {
				currentShape.classList.add("hidden");
			}
		}
	}
});



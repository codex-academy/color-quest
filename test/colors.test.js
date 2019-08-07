describe("The ColorQuest factory function", function(){

	it("should allow me to add 2 shapes", function(){
		
		const colorQuestManager = ColorQuestManager();

		colorQuestManager.addShape("blue", 7);
		colorQuestManager.addShape("orange", 3);

		// I should have 2 shapes
		assert.equal(2, colorQuestManager.getShapes().length);

		// checking
		const shapeOne = colorQuestManager.getShapes()[0];
		assert.equal("blue", shapeOne.color);
		assert.equal(7, shapeOne.number);

		const shapeTwo = colorQuestManager.getShapes()[1];
		assert.equal("orange", shapeTwo.color);
		assert.equal(3, shapeTwo.number);

	});

	it("should allow me to add 3 shapes", function(){

		const colorQuestManager = ColorQuestManager();

		colorQuestManager.addShape("green", 7);
		colorQuestManager.addShape("yellow", 3);
		colorQuestManager.addShape("green", 8);

		const shapeList = colorQuestManager.getShapes();
		assert.equal(3, shapeList.length);

		assert.equal("green", shapeList[0].color);
		assert.equal("yellow", shapeList[1].color);
		assert.equal("green", shapeList[2].color);

	});

	it("should be able to find all the blue shapes", function(){
		// assemble
		const colorQuestManager = ColorQuestManager();
		// add some shapes
		colorQuestManager.addShape("blue", 7);
		colorQuestManager.addShape("yellow", 3);
		colorQuestManager.addShape("blue", 8);
		colorQuestManager.addShape("orange", 8);
		// act - filtering the shapes
		const filteredShapes = colorQuestManager.filter({
			color: "blue"
		});
		// act - did the thing happen that should have happened.
		// checking that the right number of shapes was returned
		assert.equal(2, filteredShapes.length);
		// checking the shapes that was returned
		assert.deepEqual([ 
			{color : "blue", number: 7},
			{color : "blue", number: 8}],
			filteredShapes);

	});

	it("should be able to find all the orange shapes", function(){
		// assemble
		const colorQuestManager = ColorQuestManager();
		// add some shapes
		colorQuestManager.addShape("orange", 3);
		colorQuestManager.addShape("yellow", 3);
		colorQuestManager.addShape("blue", 8);
		colorQuestManager.addShape("orange", 7);
		// act - filtering the shapes
		const params = {
			color: "orange"
		};
		const filteredShapes = colorQuestManager.filter(params);
		// act - did the thing happen that should have happened.
		// checking that the right number of shapes was returned
		assert.equal(2, filteredShapes.length);
		// checking the shapes that was returned
		assert.deepEqual([ 
			{color : "orange", number: 3},
			{color : "orange", number: 7}],
			filteredShapes);

	});

	it("should be able to find all the number 3 shapes", function(){
		// assemble
		const colorQuestManager = ColorQuestManager();
		// add some shapes
		colorQuestManager.addShape("orange", 3);
		colorQuestManager.addShape("yellow", 3);
		colorQuestManager.addShape("blue", 8);
		colorQuestManager.addShape("orange", 7);
		// act - filtering the shapes
		const params = {
			number: 3
		};
		const filteredShapes = colorQuestManager.filter(params);
		// act - did the thing happen that should have happened.
		// checking that the right number of shapes was returned
		assert.equal(2, filteredShapes.length);
		// checking the shapes that was returned
		assert.deepEqual([ 
			{color : "orange", number: 3},
			{color : "yellow", number: 3}],
			filteredShapes);

	});

	it("should be able to find all the number 7 shapes", function(){
		// assemble
		const colorQuestManager = ColorQuestManager();
		// add some shapes
		colorQuestManager.addShape("orange", 3);
		colorQuestManager.addShape("yellow", );
		colorQuestManager.addShape("blue", 7);
		colorQuestManager.addShape("orange", 7);
		// act - filtering the shapes
		const params = {
			number: 7
		};
		const filteredShapes = colorQuestManager.filter(params);
		// act - did the thing happen that should have happened.
		// checking that the right number of shapes was returned
		assert.equal(2, filteredShapes.length);
		// checking the shapes that was returned
		assert.deepEqual([ 
			{color : "blue", number: 7},
			{color : "orange", number: 7}],
			filteredShapes);

	});

	it("should be able to find all the number 7 orange shapes", function(){
		// assemble
		const colorQuestManager = ColorQuestManager();
		// add some shapes
		colorQuestManager.addShape("orange", 3);
		colorQuestManager.addShape("orange", 7);
		colorQuestManager.addShape("blue", 7);
		colorQuestManager.addShape("orange", 7);
		// act - filtering the shapes
		const params = {
			number: 7,
			color: "orange"
		};
		const filteredShapes = colorQuestManager.filter(params);
		// act - did the thing happen that should have happened.
		// checking that the right number of shapes was returned
		assert.equal(2, filteredShapes.length);
		// checking the shapes that was returned
		assert.deepEqual([ 
			{color : "orange", number: 7},
			{color : "orange", number: 7}],
			filteredShapes);

	});

	it("should be able to find all the number 4 green shapes", function(){
		// assemble
		const colorQuestManager = ColorQuestManager();
		// add some shapes
		colorQuestManager.addShape("green", 4);
		colorQuestManager.addShape("orange", 4);
		colorQuestManager.addShape("green", 4);
		colorQuestManager.addShape("green", 4);
		colorQuestManager.addShape("orange", 4);
		// act - filtering the shapes
		const params = {
			number: 4,
			color: "green"
		};
		const filteredShapes = colorQuestManager.filter(params);
		// act - did the thing happen that should have happened.
		// checking that the right number of shapes was returned
		assert.equal(3, filteredShapes.length);
		// checking the shapes that was returned
		assert.deepEqual([ 
			{color : "green", number: 4},
			{color : "green", number: 4},
			{color : "green", number: 4}],
			filteredShapes);

	});

});
function ColorQuestManager() {
	const shapes = [];

	function addShape(color, number) {
		const shape = {
			color,
			number
		};
		shapes.push(shape);
	}

	function getShapes() {
		return shapes;
	}

	function filter(filterParams) {
		const filterColor = filterParams.color;
		const filterNumber = filterParams.number;

		const filteredShapes = [];
		// loop over all the shapes
		
		if ( filterColor !== undefined && filterNumber !== undefined ) {
			for(var i=0;i<shapes.length;i++) {
				const currentShape = shapes[i];
				// check if the current shape has a color we are looking for
				if ( currentShape.color === filterColor 
						&& currentShape.number === filterNumber) {
					filteredShapes.push(currentShape);
				}
			}
		} else if (filterColor !== undefined) {
			for(var i=0;i<shapes.length;i++) {
				const currentShape = shapes[i];
				// check if the current shape has a color we are looking for
				if ( currentShape.color === filterColor) {
					filteredShapes.push(currentShape);
				}
			}
		} else if (filterNumber !== undefined) {
			for(var i=0;i<shapes.length;i++) {
				const currentShape = shapes[i];
				// check if the current shape has the number we are looking for
				if ( currentShape.number === filterNumber ) {
					filteredShapes.push(currentShape);
				}
			}
		}

		return filteredShapes;;
	}

	return {
		addShape,
		filter,
		getShapes
	}
}
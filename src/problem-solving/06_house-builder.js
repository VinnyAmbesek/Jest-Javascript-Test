/**
 * Your function should print a house according to the following specification
 *
 * Param 1: height
 * Param 2: width
 * If width is not provided width = height
 *
 * Roof: 
 * Even width: roof tip is /\\, roof height = width/2 + 1
 * Odd width: roof tip is ^, roof height = (width+1)/2 + 1
 * 
 * Doors:
 * A door is always 3 fields wide and min 2 and max 3 field high.
 * It is always on the bottom center of the house and always has at least 1 free row above. [in case of even width adjust door to the right]
 * If it does not fit into the house, there is no door.
 *
 * Windows:
 * There is either (a) no window (not enough space in the house) or (b) two windows in the house.
 * Each window has a size of 3x3. [3x2?]
 * They always have the same distance from each other as from the left and right wall of the house.
 * If the math does not work out the adjustment is done in the center between both windows.
 * Vertically they are always in the center between the top of the door and the bottom of the roof.
 *
 * We rather have a door of max size in the house, than windows.
 *
 * Please implement it generic, not just to fulfill the test.
 * See the test to find the characters to use and to answer your questions.
 */
  function house() {
  	let ret = "\n";
  	let height = arguments[0];
  	if (height == null) height = 3;
  	let width = arguments[1];
  	if (width == null) width = height;

  	let hasDoor = width >= 3 && height >=2;
  	let hasWindows = hasDoor && width>=9 && height >=5;

  	//ROOF
  	let tip = "^\n";
  	let isEven = width%2 == 0;
  	if (isEven) tip = "/\\\n";
  	let roofHeight = Math.floor( (width+1)/2 + 1);
  	//tip
  	for(let i = 0; i < roofHeight-1; i++){
  		ret += " ";
  	}
  	ret += tip;
  	//body
  	for(let i = 2; roofHeight-i >= 0; i++){
  		let spaceBefore = roofHeight-i;
	  	for(let j = 0; j < spaceBefore; j++){
	  		ret += " ";
	  	}
	  	ret +="/";
	  	let spaceMiddle = (i-1)*2;
	  	if (!isEven) spaceMiddle--;
	  	for(let j = 0; j < spaceMiddle; j++){
	  		ret += " ";
	  	}
	  	ret +="\\\n";
  	} 

  	//WALLS
  	let doorStart = -1;
  	let doorHeight = -1;
  	if (hasDoor) {
  		doorHeight = Math.min(height, 3);
  		doorStart = Math.floor(width/2);
  	}
  	let windowsStart = -1;
  	let windowsHeight = -1;
  	let windowsSpaces = -1;
  	let windowsSpacesMidle = -1;
  	if (hasWindows) {
  		windowsHeight = Math.floor((height-3)/2)+3;
  		windowsSpaces = Math.floor((width-6)/3);
  		windowsSpacesMidle = windowsSpaces + ((width-6)%3);
  	}

  	for(let i = height; i > 0; i--){
  		ret += "|";
  		let space = " ";
  		if (i == 1) space = "_";

  		if (hasWindows && (i == windowsHeight || i == windowsHeight+1)) { //windows zone
  			let windows = "|_|";
  			if (i == windowsHeight+1) windows = " _ ";
		  	for(let j = 0; j < windowsSpaces; j++){
		  		ret += " ";
		  	}
		  	ret += windows;
		  	for(let j = 0; j < windowsSpacesMidle; j++){
		  		ret += " ";
		  	}
		  	ret += windows;
		  	for(let j = 0; j < windowsSpaces; j++){
		  		ret += " ";
		  	}
  		} else if (hasDoor && i <= doorHeight) {//door zone
  			let door = "| |";
  			if (i == doorHeight) door = " _ ";
  			let spaceBefore = Math.floor((width-3)/2);
  			let spaceAfter = spaceBefore;
  			if (isEven) spaceBefore++;
		  	for(let j = 0; j < spaceBefore; j++){
		  		ret += space;
		  	}
  			ret+=door;
		  	for(let j = 0; j < spaceAfter; j++){
		  		ret += space;
		  	}
  		} else { // empty wall zone
		  	for(let j = 0; j < width; j++){
		  		ret += space;
		  	}
  		}
  		ret += "|";
  		if (i!=1) ret += "\n";
  	}




    return ret;
}
module.exports = house;
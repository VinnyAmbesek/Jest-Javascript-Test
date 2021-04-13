/**
 * Please find a path to rescue the dog (d) from the maze
 * The maze is a 2 dimensional array which path is ' ' (space) and blocks are '#'
 * you can move left, right, top, up
 *
 * return path should be the array of position numbers order from start to reach dog.
 * 
 * what is the position number?
 * It is the number we assign for each cell in the matrix from left to right and top to bottom in an incremented value.
 * which start from 0 to (size of the matrix - 1)
 *
 * example for calculating position
 * matrix size 8 x 6 (row x column)
 * a[0][1] = 1
 * a[1][1] = 7
 * a[7][5] = 47
 *
 * If you cannot find the path please return undefined.
 *
 * See the test if you have questions.
 */
 function rescueDogPath(options) { // A*
 	let rows = options.rows;
 	let columns = options.columns;
 	let startPos = options.startPosition;
 	let maze = options.maze;
    let start = null; // row column
    let end = null;
    let ret = undefined;

    //find start and end
    for (i = 0; i < maze.length && (start==null || end == null); i++) {
    	for (j = 0; j < maze[i].length && (start==null || end == null); j++) {
    		if (start == null && i*columns+j == startPos) {
    			start = {};
    			start.row = i;
    			start.column = j;
    		}
    		if (end == null && maze[i][j] == "d"){
    			end = {};
    			end.row = i;
    			end.column = j;
    		}
    	}
    }
    
    //A*
    let queue = [];
    queue.push({row:start.row, column:start.column, weight:0, parent:null});
    let list = [];

    while (queue.length > 0){

    	//lowest weight
    	let pos = 0;
    	for (let i = 0; i <queue.length; i++){
    		if (queue[i].weight < queue[pos].weight) por = i;
    	}
    	let current = queue[pos];


    	//found dog!
    	if (current.row == end.row && current.column == end.column) {
    		let node = current;
    		ret = [];
    		while (node){
    			ret.push(node.row * columns + node.column);
    			node = node.parent;
    		}
    		return ret.reverse();
    	}

    	//keep looking for dog
    	queue.splice(pos, 1);
    	list.push(current);

    	//find adjacent open paths
    	let adjacent = [];
    	let row = current.row;
    	let column = current.column;
    	let weight = current.weight+1;

    	if (maze[row-1] && maze[row-1][column] && maze[row-1][column] != "#") {
    		adjacent.push({row:row-1, column:column, weight:weight});
    	}
    	if (maze[row+1] && maze[row+1][column] && maze[row+1][column] != "#") {
    		adjacent.push({row:row+1, column:column, weight:weight});
    	}
    	if (maze[row][column-1] && maze[row][column-1] != "#") {
    		adjacent.push({row:row, column:column-1, weight:weight});
    	}
    	if (maze[row][column+1] && maze[row][column+1] != "#") {
    		adjacent.push({row:row, column:column+1, weight:weight});
    	}

    	//check adjacent paths
    	for(let i = 0; i < adjacent.length; i++) {
    		let path = adjacent[i];
    		//look for it on list of walked paths
    		let walked = false;
    		for(let j = 0; j < list.length; j++){
    			if (path.row == list[j].row && path.column == list[j].column){
    				walked = true;
    			}
    		}
    		if (walked) continue;

    		//look for it on queue
    		let duplicate = -1;
    		for(let j = 0; j < queue.length; j++){
    			if (path.row == queue[j].row && path.column == queue[j].column){
    				duplicate = j;
    			}
    		}

    		if (duplicate < 0){ // new element
    			path.parent = current;
    			queue.push(path);
    		} else if (queue[duplicate].weight > path.weight){//not new but a better path
    			queue[duplicate].parent = current;
    			queue[duplicate].weight = path.weight;
    		}

    	}

    }

    return ret;
}
module.exports = rescueDogPath;
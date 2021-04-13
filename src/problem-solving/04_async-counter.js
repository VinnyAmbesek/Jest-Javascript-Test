/**
 * Export a function named 'count'.
 * It should call the given callback every 10th of a second with a increment from given start to end integer
 * Return a function to prematurely cancel the counting process.
 *
 * @param {number} start - Given to callback first
 * @param {number} end - Stop when count reached this value
 * @param {function(number): void} callback - Called after each 100ms with an increment
 * @returns {function(): void} - Cancel countdown function
 */
function count(start, end, callback) {
    let i = start;

    let interval = setInterval(function(){
    	i = i+1;
    	if (i > end+start) {
    		clearInterval(interval);
    	} else {
    		callback(i-start);
    	}
    }, 100);
    
    return function(){clearInterval(interval)}
}
module.exports = count;
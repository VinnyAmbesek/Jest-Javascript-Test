/**
 * Have a look at the test and implement the needed function, so the test will succeed
 */
let arrays = class {
 	static sum (array) {
 		let ret = 0;
 		for (let i = 0; i < array.length; i++) {
 			ret += array[i];
 		}
 		return ret;
 	}

 	static concat () {
 		let ret = [];
 		for (let i = 0; i < arguments.length; i++){
 			ret = ret.concat(arguments[i]);
 		}
  		// arguments[i]
 		return ret;
 	}

 	static count (array, obj){
 		let ret = 0;
 		for (let i = 0; i < array.length; i++) {
 			if (array[i] === obj) ret ++;
 		}
 		return ret;
 	}

 	static duplicates (array) {
 		let table = {};
 		let ret = [];
 		for (let i = 0; i < array.length; i++) {
 			if (table[""+array[i]] == undefined) {
 				table[""+array[i]] = 1;
 			} else {
 				table[""+array[i]]++;
 			}
 		}
 		for (var key in table){
 			if (table[key] != undefined && table[key] > 1){
 				ret.push(parseInt(key));
 			}
 		}
 		return ret;
 	}

 	static square (array) {
 		let ret = new Array(array.length);
 		for (let i = 0; i < array.length; i++) {
 			ret[i] = array[i] * array[i];
 		}
 		return ret;
 	}
 }
 module.exports = arrays;
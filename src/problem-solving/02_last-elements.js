/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */
function getLastNumbers(payload, n) {
	let ret = [];
	let nested = payload;

	while (nested != undefined){
		ret.push(nested.data);
		nested = nested.next;

		if (ret.length > n) ret.shift();
	}

	return ret;
}
module.exports = getLastNumbers;
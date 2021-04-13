/**
 * Check if the given string is an anagram of a palindrom
 *
 * Example
 * s = 'aabbccdd'
 * One way this can be arranged into a palindrome is abcddcba. Return true.
 *
 * Constraints
 * contains only lowercase letters in the range ascii[a..z]
 */
 function isPalindromePossible(text) {
    let ret = false;
    let table = {};
    let c = 'a';
    let odds = 0;

    for (let i = 0; i < 25; i++){
    	let char = String.fromCharCode(c.charCodeAt(0) + i);
    	let pat = new RegExp(char, "g")
    	table[char] = (text.match(pat) || []).length;

    	if (Math.abs(table[char] % 2) == 1) odds++;
    	if (odds > 1) return false;
    }
    return true;
}
module.exports = isPalindromePossible;
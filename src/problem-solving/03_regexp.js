/**
 * This test, tests some knowledge of Regular Expressions.
 *
 * See the test for what functions you need to implement.
 */
 let answers = class {
    static containsNumber (text) {
    	let pat = /[0-9]/;
        let str = text.match(pat);
        return str != null;
    }

    static containsRepeatingLetter (text) {
    	let pat = /([^0-9])\1/;
        let str = text.match(pat);
        return str != null;
    }

    static endsWithVowel (text) {
    	let pat = /[aeiou]$/i;
        let str = text.match(pat);
        return str != null;
    }

    static captureThreeNumbers (text) {
    	let pat = /[0-9]{3}/;
        let str = text.match(pat);
        if (str != null) return str[0];
        return str != null;
    }

    static matchesPattern (text) {
    	let pat = /^\d{3}[-]\d{3}[-]\d{4}$/;
        let str = text.match(pat);
        return str != null;
    }

    static isUSD (text) {
    	let pat = /^\$(([1-9]\d{0,2}(,\d{3})*)|0)?(\.\d{2})?$/;
        let str = text.match(pat);
        return str != null;
    }
 }
 module.exports = answers;
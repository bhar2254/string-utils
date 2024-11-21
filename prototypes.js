/*	prototypes.js
	by Blaine Harper

	PURPOSE: A lightweight library to add useful string manipulation functions to JavaScript's `String.prototype`.
*/

function capitalizeFirst(string) {
	// Handle both standalone and String prototype contexts
	if (this instanceof String)
		string = this
  
	if (!this instanceof String) return string
  
	// Split the string into an array of words
	const arr = string.split(" ")
  
	// Capitalize the first letter of each word
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
	}
  
	// Join the words back into a single string
	return arr.join(" ")
}

function toCamelCase(string) {
	if (this instanceof String) string = this
	return string.replace(/[_-\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : '')).replace(/^(.)/, (char) => char.toLowerCase())
}

function toSnakeCase(string) {
	if (this instanceof String) string = this
	return string.replace(/[\sA-Z]+/g, (match, index) => (index ? '_' : '') + match.trim().toLowerCase())
}

function toKebabCase(string) {
	if (this instanceof String) string = this
	return string.replace(/[\sA-Z]+/g, (match, index) => (index ? '-' : '') + match.trim().toLowerCase())
}

function truncate(string, length = 100) {
	if (this instanceof String) string = this
	if (string.length <= length) return string
	return string.slice(0, length) + '...'
}
  
function isPalindrome(string) {
	if (this instanceof String) string = this
	const normalized = string.replace(/[\s\W_]+/g, '').toLowerCase()
	return normalized === normalized.split('').reverse().join('')
}

function containsOnlyLetters(string) {
	if (this instanceof String) string = this
	return /^[a-zA-Z]+$/.test(string)
}

function pad(string, length, char = ' ', direction = 'right') {
	if (this instanceof String) string = this
	if (string.length >= length) return string
  
	const padLength = length - string.length
	const padStr = char.repeat(padLength)
  
	switch (direction) {
		case 'left':
			return padStr + string
		case 'both':
			return padStr.slice(0, Math.floor(padLength / 2)) +
				string +
				padStr.slice(Math.floor(padLength / 2))
		default:
			return string + padStr
	}
}

function reverse(string) {
	if (this instanceof String) string = this
	return string.split('').reverse().join('')
}

function wordCount(string) {
	if (this instanceof String) string = this
	return string.trim().split(/\s+/).length
}  

function capitalizeWords(string) {
	if (this instanceof String) string = this
	if (!this instanceof String) return string
	return string.split(/[\s_]+/)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}

function removeVowels(string) {
	if (this instanceof String) string = this
	if (!this instanceof String) return string
	return string.replace(/[aeiouAEIOU]/g, '')
}

function replaceSpacesWith(string, char = '_') {
	if (this instanceof String) string = this
	if (!this instanceof String) return string
	return string.replace(/\s+/g, char)
}

function replaceUnderscoreWith(string = ' ', char = ' ') {
    // Handle both standalone and String prototype contexts
    if (this instanceof String){
		char = string
        string = this
	}

    // If string is still not valid, return it as is
    if (!this instanceof String)
        return string

    // Replace all underscores with the specified character
    return string.replace(/_/g, char);
}

function stripHtml(string) {
	if (this instanceof String) string = this
	return string.replace(/<\/?[^>]+(>|$)/g, '')
}
  
// 	Export functions for later use
module.exports={
	// Case Transformation
	toCamelCase,
	toSnakeCase,
	toKebabCase,
	// Truncation
	truncate,
	// Validation
	isPalindrome,
	containsOnlyLetters,
	// Formatting
	pad,
	reverse,
	//  Word Manipulation
	wordCount,
	capitalize: capitalizeFirst,
    capitalizeFirst,
	capitalizeWords,
	// Customizations
	removeVowels,
	replaceSpacesWith,
	replaceUnderscoreWith,
	stripHtml
}
function sommeTableau(tableau) {
	if (tableau.length == 0)
		return 0
		return tableau[0] + sommeTableau(tableau.splice(1))
}

console.log(sommeTableau([1, 2, 3, 4, 5]))
// Affiche 15

function lengthTableau(tableau) {
	if (tableau.length == 0)
		return 0
		return 1 + lengthTableau(tableau.splice(1))
}

console.log(lengthTableau([1, 2, 3, 4, 5]))
// Affiche 5

function isPalindrome(str) {
    if (str.length <= 1)
        return true

    if (str[0] !== str[str.length -1])
        return false
    return isPalindrome(str.slice(1, -1))
}

console.log(isPalindrome("eluparcettecrapule"))
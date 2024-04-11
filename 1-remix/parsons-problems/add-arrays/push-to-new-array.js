/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/5868e2f683b26841a1000444 */

/* this exercise has 0 distractors */
'use strict'

export function addArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error('arrays should not be different length')
    }
    var sum = [];
    for (var i = 0; i < arr1.length; i++) {
        sum.push(arr1[i] + arr2[i]);
    }
    return sum;
}

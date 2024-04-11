/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */

export const addArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) throw new Error('Error');
    return arr1.map((_, i) => arr1[i] + arr2[i]);
};

// #todo

'use strict';

console.log('- broken JS -');
try {
    const userAge = 12;
    for (const year of userAge) {
        console.log(year);
    }
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw new Error('userAge is not iterable');
} catch (err) {
    console.error(err);

    console.assert(err.name === 'Error', 'name fail');
    console.assert(err.message === 'userAge is not iterable', 'message fail');
}

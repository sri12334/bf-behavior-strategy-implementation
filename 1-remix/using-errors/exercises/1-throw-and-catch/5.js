// #todo

'use strict';

console.log('- broken JS -');
try {
    turtle = 4;
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw new Error('turtle is not defined');
} catch (err) {
    console.error(err);

    console.assert(err.name === 'Error', 'name fail');
    console.assert(err.message === 'turtle is not defined', 'message fail');
}

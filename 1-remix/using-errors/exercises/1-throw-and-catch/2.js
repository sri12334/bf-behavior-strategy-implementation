// #todo

'use strict';

console.log('- broken JS -');
try {
    let name;
    name.length;
} catch (err) {
    console.error(err);
}

console.log('- throw new error -');
try {
    throw new Error("Cannot read property 'length' of undefined");
} catch (err) {
    console.error(err);

    console.assert(err.name === 'Error', 'name fail');
    console.assert(
        err.message === "Cannot read property 'length' of undefined",
        'message fail',
    );
}

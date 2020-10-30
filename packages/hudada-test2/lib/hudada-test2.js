'use strict';
const test1 = require('hudada-test1')
module.exports = hudadaTest2;

function hudadaTest2() {
    const str = test1()
    return str.replace(/\s/g, '$')
}

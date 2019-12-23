// body mapping
'use strict';

module.exports.add = async event => {
    let { num1, num2 } = event;
    return JSON.stringify({
        result12: num1 + num2,
        num1: num1
    });
};

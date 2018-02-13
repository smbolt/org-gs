'use strict';

function initGs(args) {
    // this method initializes module gs
    var theArgs = args;
    console.log('Module gs is initialized.');
    var gs = {
        prop1: 'value1',
        prop2: 'value2',
        method1: function method1() {
            return 'this is from method1';
        }
    };

    return gs;
}

module.exports = initGs;

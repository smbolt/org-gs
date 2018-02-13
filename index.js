'use strict';

function initGs(args) {
    // this method initializes module gs
    this.args = args;
    console.log('Module gs is initialized.');
    var gs = {
        prop1: 'value1',
        prop2: 'value2',
        method1: function method1() {
            return 'this is from method1';
        }
    };
}

module.exports = initGs;

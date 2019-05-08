
const $ = require('jquery');
const hello = require('./say-hello.js');

const sayHello = () => ('hello');

sayHello();
console.log(sayHello());

$('#howdy').css({
    color: 'red'
});

console.log(hello);
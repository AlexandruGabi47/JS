console.log("Hello world");
//
console.error("Oops! There was a problem");
//
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

var arr1 = animals.slice(0,2);
var arr2 = animals.slice(-2);
animals.push('tiger');
animals.unshift('horse');
var arr3 = animals.filter(animal => animal.search(/^[a-d]/) !== -1);
var arr4 = animals.filter(animal => animal.search(/^[a-d]/) !== -1);
var sanimals = animals.join('* ');
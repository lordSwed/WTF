// import {Utils} from './utils';
//
// if (!process.env.FIRST_NAME || !process.env.LAST_NAME) {
//     throw new Error('FIRST_NAME or LAST_NAME not defined');
// }
//
// const fullname:string = `${process.env.FIRST_NAME} ${process.env.LAST_NAME}`; //process.env.FIRST_NAME + " " + process.env.LAST_NAME;
//
// console.log("Message: ", Utils.hallo(fullname));
var fs = require('fs');
var file = fs.readFileSync('./wtf.txt', 'utf8');
console.log(file);

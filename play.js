const net = require("net");
const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

//Establish connection with game server

console.log('Connecting ...');
connect();


setupInput();
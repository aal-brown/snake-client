const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

//Establish connection with game server

console.log('Connecting ...');

setupInput(connect());

//COnnect outputs the conn object, which contains all of the methods used to connect to the server, sending commands, etc. By including it in setinput we have the output "conn" object as the input for our setupInput, allowing us to use it to send commands.
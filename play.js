const net = require("net");
const { connect } = require("./client.js");

//Establish connection with game server

console.log('Connecting ...');
connect();


const handleUserInput = function(data) {
  if (data === "\u0003") {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
    
  stdin.on("data", (data) => {handleUserInput(data)});

  return stdin;
};




setupInput();
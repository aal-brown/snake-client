const net = require("net");

let connection;

const handleUserInput = function(data) {
  if (data === "\u0003") {
    process.exit();
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
    
  //Why cant we just use conn as is?

  connection = conn;

  stdin.on("data", (data) => {handleUserInput(data)});

  stdin.on("data", (key) => {

    if (key === "w") {
      connection.write("Move: up");
    }
 
    if (key === "s") {
      connection.write("Move: down");
    }

    if (key === "a") {
      connection.write("Move: left");
    }

    if (key === "d") {
      conn.write("Move: right");
    }
  });

  return stdin;
};

module.exports = {
  setupInput
};
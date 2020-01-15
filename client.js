const net = require('net'); //Require the right module

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 


  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}


module.exports = {
  connect
}
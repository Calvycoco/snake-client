const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  console.log("Successfully connected to game server!");
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connected to server!');
    conn.write('Name: Snek');
  });
  conn.on("data", (data) => {
    console.log("Received data from server:", data);
  });

  return conn;
};
module.exports = {connect};
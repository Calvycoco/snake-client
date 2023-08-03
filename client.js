const net = require("net");

const connect = () => {
  console.log("Successfully connected to game server!")
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });
  conn.setEncoding("utf8");
  conn.write('Name: Cal')
  // conn.write('Move: left')
  conn.on("data", (data) => {
    console.log("Received data from server:", data);
  });

  return conn;
};
module.exports = connect
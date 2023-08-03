const { stdin } = require('process')

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  return stdin;
};
const handleUserInput = function(data) {
  console.log("User input:", data);
  if (data === '\u0003') {
    console.log('GG');
    process.exit();
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'd') {
    connection.write('Move: right');
  } else if (data === 'j') {
    connection.write('Say: sssssssssssss')
  } 
};

stdin.on("data", handleUserInput);
module.exports ={setupInput}
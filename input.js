const { stdin } = require('process');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(input) {
    if (input === '\u0003') {
      process.exit();
    }
  };   
    stdin.on("data", handleUserInput);
    return stdin;
};
module.exports = { setupInput }
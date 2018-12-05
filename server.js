const app = require('./backend/app');// Location of express app
const debug = require("debug")("node-angular");
const http = require('http');// http web

// Make sure the value is a valid number
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {// is it an invalid number?
    // named pipe
    return val;// if so just retrun the value passed
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
// checks which type of error occured
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privilages");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};
// Used to give information, logs if listening
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORR || "3000");
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);// error listener
server.on("listening", onListening);// listening listener
server.listen(port);

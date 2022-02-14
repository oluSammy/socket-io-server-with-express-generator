const { io } = require("./app");

const socketApi = () =>
  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    // socket.io implementation
  });

module.exports = socketApi;

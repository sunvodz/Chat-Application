const server = require('http').createServer();
const io = require('socket.io')(server)

io.on("connection", function (socket) {
    socket.on("emit", function (data) {
        socket.broadcast.emit("message", { ...data });
        console.log("message",data)
    })
})
server.listen(8088, function (err) {
    if (err) throw err;
    console.log("Start server to port 8088")
})
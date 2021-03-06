

module.exports = (io) => {
    console.log("Socketio listening...");

    io.on('connection', function(socket){
        console.log(`A user connected with id: ${socket.id}`);
        console.log(socket.handshake.headers.cookie);
        socket.emit('message',{msg:"Server connected", timestamp: Date.now()});

        socket.on('message', data => {
            console.log("Received message from client");
            console.log(data);
            socket.emit('message', data); //this return message to client
            socket.broadcast.emit('message', data); //this broadcast message
        })
    });

}

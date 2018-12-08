module.exports = function (me, io, socket) {

    // disconnect event
    socket.on('disconnect', function () {
        io.emit('visitors', io.engine.clientsCount);
    });

    // Session
    // var session = socket.handshake.session
    // Clients count
    // var visitors = io.engine.clientsCount;
}
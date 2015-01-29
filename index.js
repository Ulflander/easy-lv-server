
var Server = require('socket.io');
var io = new Server();

io.on('connection', function(socket){
    console.log('New connection');
});

exports.reload = function() {
    io.emit('reload');
};

exports.init = function(port) {
    io.attach(port || 4444);
};
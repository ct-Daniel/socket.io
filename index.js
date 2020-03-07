var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3003


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket){
    socket.on('mensagem', function(msg){
        io.emit('mensagem', msg);
    });
});


http.listen(port, () => {
    console.log('API Rodando na porta: ' + port)
});
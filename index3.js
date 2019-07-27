var express = require("express");
var app = express();
var socketio = require("socket.io");
var server=app.listen(3002);
var io = socketio(server);
app.use(express.static("./static"));

io.on("connection",(socket)=>{
       socket.broadcast.emit("name","Someone has joined");
       socket.on("name",(name)=>{
             console.log("some one has joined");
             socket.broadcast.emit("name",name);
                                });
});



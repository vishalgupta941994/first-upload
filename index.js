//socket object is browser object 
// io object is server object.
//
var express= require("express");
var socket= require("socket.io");

var app = express();
var server=   app.listen(3000);
var io = socket(server);

app.use(express.static("./static"));

io.on("connection",(socket)=>{
    console.log("a socket is now open");
    socket.on("socketping",()=>{
       console.log("hello there we have a ping");
       socket.emit("socketpong");
    });

});



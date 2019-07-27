var express= require("express");
var socket= require("socket.io");

var app = express();
var server=   app.listen(3000);
var io = socket(server);

app.use(express.static("./static"));

io.on("connection",(socket)=>{
    socket.on("name",(name)=>{
            console.log("name is here"+name);
            io.emit("name",name);
    })


});



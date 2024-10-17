let WebSocket = require("ws");

let server = new WebSocket.Server({port: 5000});

server.on("connection", onConnect);

function onConnect(client){
    console.log("connection is open!");
    
    client.on("message", function(message){
        console.log(`Client message: ${message.toString()}`);
        client.send("hello from server");
    });

    client.on("close", function(){
        console.log("connection is close");
        
    })
}

console.log("server starting");

var http = require("http");
var PORTG = 7000;
var PORTB = 7500;


// Functions to handle the different request
function handleRequest(request, response){
    
    response.end("You're amazing!\n");
};
function handleRequestB(request, response){

    response.end("You're terrible!");
};


//Creating the servers
var server = http.createServer(handleRequest);

server.listen(PORTG, function(){
  console.log("Listening to PORT: " + PORTG);
    
});

var server2 = http.createServer(handleRequestB);

server2.listen(PORTB, function(){
    console.log("Listening to PORT: " + PORTB);
});
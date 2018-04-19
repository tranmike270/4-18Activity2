var http = require("http");
var PORTG = 7000;
var PORTB = 7500;


// Functions to handle the different request
function handleRequest(request, response){
    
    response.end(stuff("Good"));
};
function handleRequestB(request, response){

    response.end(stuff("Bad"));
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


function stuff(arrr){
    var arr = ["You're nice","You're amazing","You're the best"];
    var arrB = ["You're terrible", "You're horrific", "You're the worst"];
    var rand = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    if(arrr === "Good"){
        return arr[rand];
    }else {
        return arrB[rand];
    };
};
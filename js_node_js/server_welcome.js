let http = require("http");

let server = http.createServer(function(request, response){
    // console.log(request.url);
    // console.log(request.method);
    // console.log(request.headers);


    // response.setHeader("Content-Type", "text/html; charset=utf8;");

    // let text1 = "<h1>Hello world</h1>";
    // response.write(text1);
    // let text2 = "<h2>Hello people</h2>";
    // response.write(text2);

    // response.end("<p>End</p>");

    let path = request.url;
    response.setHeader("Content-Type", "text/html; charset=utf8;");

    if(path === "/")
        response.write("<h1>Home page<h1>");
    else if(path === "/about")
        response.write("<h1>About page<h1>");
    else if(path === "/gallery")
        response.write("<h1>Gallery page<h1>");
    else
    response.write("<h1>Not found<h1>");

    response.write("<a href='/'>Home</a> <a href='/about'>About</a> <a href='/gallery'>Gallery</a>");
    response.end();
});

server.listen(5000, () => console.log("Server starting"));
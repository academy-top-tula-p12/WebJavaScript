let http = require("http");
let fs = require("fs");

function createCounter(){
    let count = 0;
    return function counter(){
        return ++count;
    }
}
let counter = createCounter();

function Book(title, author, year, price){    
    this.id = counter();
    this.title = title;
    this.author = author ?? "";
    this.year = year ?? 0;
    this.price = price ?? 0;
}

let books = [
    new Book("Руслан и Людмила", "Александр Пушкин", 2001, 600),
    new Book("Бесы", "Федор Достоевский", 1997, 800),
    new Book("Три сестры", "Антон Чехов", 1985, 400),
    new Book("Ревизор", "Николай Гоголь", 2012, 500),
    new Book("Господа Головлевы", "Михаил Салтыков-Щедрин", 2005, 550),
];

function getRequestData(request){
    return new Promise(async function(resolve, reject){
        try{
            let buffer = [];
            for await(let chank of request){
                buffer.push(chank);
            }
            let dataJson = JSON.parse(Buffer.concat(buffer).toString());
            resolve(dataJson);
        } catch(error){
            reject(error);
        }
    });
}

let server = http.createServer(async function(request, response){
    // get all
    if(request.url === "/api/books" && request.method === "GET"){
        response.end(JSON.stringify(books));
    }
    else if(request.url.match(/\/api\/books\/(\d+)/) && request.method === "GET"){
        let id = request.url.split("/")[3];

        let book = books.find(b => b.id === parseInt(id));
        if(book){
            response.end(JSON.stringify(book));
        }
        else{
            response.writeHead(404, {"Content-Type": "application/json"});
            response.end(JSON.stringify({ message: "Book not found" }));
        }
    }
    else if(request.url === "/api/books" && request.method === "POST"){
        try{
            let bookClient = await getRequestData(request);
            let book = new Book(bookClient.title, 
                                bookClient.author,
                                bookClient.year,
                                bookClient.price);
            books.push(book);
            response.end(JSON.stringify(book));
        }
        catch(error){
            response.writeHead(404, {"Content-Type": "application/json"});
            response.end(JSON.stringify({ message: "Invalid request" }));
        }
    }
    else if(request.url === "/" || request.url === "/index.html") {
        fs.readFile("index.html", (error, data) => response.end(data));
    }
    else{
        response.writeHead(404, {"Content-Type": "application/json"});
        response.end(JSON.stringify({ message: "Resourse not found" }));
    }
});

server.listen(5000, () => console.log("Server strted"));



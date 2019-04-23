//datalayer
var datalayer = require('./books_datalayer.js');


const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());                             // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));       // to support URL-encoded bodies

app.use(express.static(__dirname + '/public'));

datalayer.init(function(){
    console.log('init');
    app.listen(3000);
    console.log("Listening on port 3000");
});

app.get('/', function(req,res){
	res.sendFile('./public/books_index.html', {root: __dirname});
});

//Send all books
app.get("/getAllBooks", function(req,res){
    datalayer.getAllBooks(function(dtSet){
        res.send(dtSet);
    });
});

// Sort by Title
app.get("/sortTitle", function(req,res){
    datalayer.sortTitle(function(dtSet){
        res.send(dtSet);
    });
});

// Sort by Author
app.get("/sortAuthor", function(req,res){
    datalayer.sortAuthor(function(dtSet){
        res.send(dtSet);
    });
});

// Sort by Country
app.get("/sortCountry", function(req,res){
    datalayer.sortCountry(function(dtSet){
        res.send(dtSet);
    });
});

// Sort by Language
app.get("/sortLanguage", function(req,res){
    datalayer.sortLanguage(function(dtSet){
        res.send(dtSet);
    });
});

// Sort by Year
app.get("/sortYear", function(req,res){
    datalayer.sortYear(function(dtSet){
        res.send(dtSet);
    });
});

// Sort by Pages
app.get("/sortPages", function(req,res){
    datalayer.sortPages(function(dtSet){
        res.send(dtSet);
    });
});



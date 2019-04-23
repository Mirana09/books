var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://mirana:ihary@cluster0-qp2kf.mongodb.net/BDD?retryWrites=true";
var client = new MongoClient(uri, {useNewUrlParser:true });
var db;

var datalayer = {
    init : function(cb){
        //Initialize connection once
        client.connect(function(err) {
            if(err) throw err;
            db = client.db("BDD");
            cb();
        });
    },

    getAllBooks : function(cb){
        db.collection("Books").find({}).toArray(function(err, docs) {
            cb(docs);
        });
    },

    getBook : function(id, cb){
        ObjectID = require('mongodb').ObjectID;
        var ident = {
            _id : new ObjectID(id)
        };
        console.log("getBook");
        db.collection("Books").findOne(ident, function(err,result) {
            cb(result);
        });
    },

    sortTitle : function(cb){
        db.collection("Books").find({}).sort({title:1}).toArray(function(err, docs) {
            cb(docs);
        });
    },

    sortAuthor : function(cb){
        db.collection("Books").find({}).sort({author:1}).toArray(function(err, docs) {
            cb(docs);
        });
    },

    sortCountry : function(cb){
        db.collection("Books").find({}).sort({country:1}).toArray(function(err, docs) {
            cb(docs);
        });
    },

    sortLanguage : function(cb){
        db.collection("Books").find({}).sort({language:1}).toArray(function(err, docs) {
            cb(docs);
        });
    },

    sortYear : function(cb){
        db.collection("Books").find({}).sort({year:1}).toArray(function(err, docs) {
            cb(docs);
        });
    },

    sortPages : function(cb){
        db.collection("Books").find({}).sort({pages:1}).toArray(function(err, docs) {
            cb(docs);
        });
    }
 
};

module.exports=datalayer;
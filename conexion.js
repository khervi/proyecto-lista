const MongoClient = require('mongodb').MongoClient;
const assert = require('assert'); 
// Connection URL
const url = 'mongodb://localhost:27017'; 
// Database Name
const dbName = 'listas';

const state = {
  db: null
};

function connect (cb){
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    state.db = client.db(dbName);
    cb();
  });
};

function get(){
  return state.db;
}

module.exports = {
  connect,
  get
}
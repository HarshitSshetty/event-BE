let { MongoClient, ObjectId } = require("mongodb");

// let url = "mongodb://0.0.0.0:27017";
// let url = 'mongodb+srv://harshitshetty05:L3UILeQbswofChm6@cluster0.ngsmogs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// let url = "mongodb://harshitshetty05_db_user:elgWXfAvWL5j69V0@ac-gdvhsxn-shard-00-00.vhp9oio.mongodb.net:27017,ac-gdvhsxn-shard-00-01.vhp9oio.mongodb.net:27017,ac-gdvhsxn-shard-00-02.vhp9oio.mongodb.net:27017/?ssl=true&replicaSet=atlas-9gby95-shard-0&authSource=admin&appName=Cluster0"

let url = "mongodb://harshitshetty05_db_user:elgWXfAvWL5j69V0@ac-gdvhsxn-shard-00-00.vhp9oio.mongodb.net:27017,ac-gdvhsxn-shard-00-01.vhp9oio.mongodb.net:27017,ac-gdvhsxn-shard-00-02.vhp9oio.mongodb.net:27017/?ssl=true&replicaSet=atlas-9gby95-shard-0&authSource=admin&appName=Cluster0"

let addBooking = (data, res) => {
  let client = new MongoClient(url);
  client.connect();
  let db = client.db("project1");
  let coll = db.collection("events");
  coll.insertOne(data)
    .then(result => res.send(result))
    .catch(error => res.send(error))
    .finally(() => client.close());
};

let getAllBookings = (res) => {
  let client = new MongoClient(url);
  client.connect();
  let db = client.db("project1");
  let coll = db.collection("events");
  coll.find().toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
    .finally(() => client.close());
};

let deleteBooking = (id, res) => {
  let client = new MongoClient(url);
  client.connect();
  let db = client.db("project1");
  let coll = db.collection("events");
  coll.deleteOne({ _id: new ObjectId(id) })
    .then(result => res.send(result))
    .catch(error => res.send(error))
    .finally(() => client.close());
};

let updateBooking = (id, data, res) => {
  let client = new MongoClient(url);
  client.connect();
  let db = client.db("project1");
  let coll = db.collection("events");
  coll.updateOne({ _id: new ObjectId(id) }, { $set: data })
    .then(result => res.send(result))
    .catch(error => res.send(error))
    .finally(() => client.close());
};

module.exports = { addBooking, getAllBookings, deleteBooking, updateBooking };

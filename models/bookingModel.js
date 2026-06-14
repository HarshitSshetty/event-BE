let { MongoClient, ObjectId } = require("mongodb");

let url = process.env.MONGO_URL;

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

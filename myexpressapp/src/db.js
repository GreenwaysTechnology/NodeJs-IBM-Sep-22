const { MongoClient } = require("mongodb");

//connection string:
const connectionString = "mongodb://localhost:27017/demo";//process.env.ATLAS_URI;

//create connection
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
let _db;

//i want to share connection object to the application
module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            console.log('db',db)
            if (db) {
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
}
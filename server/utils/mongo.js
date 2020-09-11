/*
api for organizing mongo data
 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/FIZZY_DB";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Fizgig Database created!");
    try {
        // create collections
        const dbo = db.db("blog_entries");
        dbo.createCollection("blog_entries", function(err, res) {
            console.log("Blog Collection created!");
        });
        const initPost = {
            name: 'Welcome',
            title: "Autoblog is operational",
            p: "Hello everyone! This blog post was auto-magically generated as a way to drive me to keep people updated " +
                "as to what I am up to. I am not the best at blogging mostly due to a busy schedule managing multiple " +
                "hobbies (businesses). A few topics you can expect to find on this blog will pertain coding, farming, " +
                "running a business, and perhaps a bit of madness!",
            type: 'startup',
            timestamp: Date.now()
        };
        dbo.collection("customers").insertOne(initPost, function(err, res) {
            console.log("1 post inserted");
        });
    } catch (err) {
        throw err
    }
    finally {
        // cleanup collections
        db.close();
    }
});
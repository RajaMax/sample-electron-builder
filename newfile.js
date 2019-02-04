var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'path/to/user',
        autoload: true
    });
var doc = {
    user:"raja",
    password:"king",
};

db.insert(doc, function (err, newDoc) { // Callback is optional
    console.log(newDoc)
});
db.find({}, function (err, docs) {
    if (err) {
        console.log(err);
    } else {
        console.log(docs)
    }
});
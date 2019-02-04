var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'path/to/datafile',
        autoload: true
    });
var doc = {
    hello: 'world',
    n: 5,
    today: new Date(),
    nedbIsAwesome: true,
    notthere: null,
    notToBeSaved: undefined // Will not be saved
        ,
    fruits: ['apple', 'orange', 'pear'],
    infos: {
        name: 'nedb'
    }
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
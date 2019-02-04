var Datastore = require('nedb'),
    db = new Datastore({
        filename: 'path/to/product',
        autoload: true
    });

var app = new function () {
    this.el = document.getElementById('products');
    this.products = [];
    this.Count = function (data) {
        var el = document.getElementById('counter');
        var name = 'country';
        if (data) {
            if (data > 1) {
                name = 'products';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function () {
        var data = '';
        db.find({}, function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                if (docs.length > 0) {
                    for (i = 0; i < docs.length; i++) {
                        data += '<tr>';
                        data += '<td>' + docs[i].name + '</td>';
                        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                        data += '</tr>';
                    }
                }
                this.Count(docs.length);
                return this.el.innerHTML = data;
            }
        });
        
    };
    this.Add = function () {
       
        

        el = document.getElementById('add-name');
        // Get the value
        var name = el.value;
        if (name) {
            // var doc = {name:name.trim()}
            // db.insert(doc, function (err, newDoc) { // Callback is optional
            //     console.log(newDoc)
            //     this.products.push(name.trim());
            //     // Reset input value
            //     el.value = '';
            //     // Dislay the new list
            //     this.FetchAll();
            // });
           
        }
    };
    this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        // Display value in the field
        el.value = this.products[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function () {
            // Get value
            var country = el.value;
            if (country) {
                // Edit value
                self.products.splice(item, 1, country.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };
    this.Delete = function (item) {
        // Delete the current row
        this.products.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };

}
app.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}
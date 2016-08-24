var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('localhost:27017/shoppingCart');

var Product = require('../models/product');

var products = [
    new Product({
        imagePath: 'https://c1.staticflickr.com/9/8610/29168223936_55d594cb51.jpg',
        title: 'League of Legends',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://c1.staticflickr.com/9/8137/28914324990_4464363a65.jpg',
        title: 'Halo',
        description: 'Awesome Game!!!',
        price: 15
    }),
    new Product({
        imagePath: 'https://c1.staticflickr.com/9/8273/28914326220_a4df3c4670.jpg',
        title: 'Age of Empires',
        description: 'Awesome Game!!!',
        price: 20
    }),
    new Product({
        imagePath: 'https://c1.staticflickr.com/9/8105/29168224346_a01ecf5f2d.jpg',
        title: 'Fifa Online 3',
        description: 'Awesome Game!!!',
        price: 25
    }),
    new Product({
        imagePath: 'http://www.gamecracked.com/wp-content/uploads/front_7.jpg',
        title: 'Pes 2015',
        description: 'Awesome Game!!!',
        price: 30
    }),new Product({
        imagePath: 'https://c1.staticflickr.com/9/8087/29168224376_b216c63fbe.jpg',
        title: 'Asphalt 8',
        description: 'Awesome Game!!!',
        price: 35
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            mongoose.disconnect();
        }
    });
}


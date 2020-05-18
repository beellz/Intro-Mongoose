const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number ,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name :"Apple",
    rating: 7,
    review: "awesome apple"
});

//  fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number ,
    petsName : String
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "jhon",
    age : 55,
    petsName: "jumbo"
});

//  person.save();



const kiwi = new Fruit({
    name: "kiwi",
    rating : 4 ,
    review : "the best fruit!"
});

const orange = new Fruit({
    name: "orange",
    rating : 5 ,
    review : "type better way "
});

const banana = new Fruit({
    name: "banana",
    rating : 6 ,
    review : "simple can eat without teeth"
});


Fruit.insertMany([kiwi, orange ,banana], (err) => {
    if(err) {
        console.log(err);

    } else {
        console.log("succesgully saved all the fruits to fruitDB");
    }
} );
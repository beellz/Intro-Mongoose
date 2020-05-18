const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27018/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});

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

// fruit.save();

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number ,
    petsName : String
});

const Person = mongoose.model("Person", PersonSchema);

const person = new Person ({
    name: "jhon",
    age : 55,
    petsName: "jumbo"
});

person.save();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        // required: [true, "Please check name entry"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    } ,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    // name :"Apple",
    rating: 6,
    review: "peach peachy "
});

//   fruit.save();

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



// const kiwi = new Fruit({
//     name: "kiwi",
//     rating : 4 ,
//     review : "the best fruit!"
// });

// const orange = new Fruit({
//     name: "orange",
//     rating : 5 ,
//     review : "type better way "
// });

// const banana = new Fruit({
//     name: "banana",
//     rating : 6 ,
//     review : "simple can eat without teeth"
// });


// Fruit.insertMany([kiwi, orange ,banana], (err) => {
//     if(err) {
//         console.log(err);

//     } else {
//         console.log("succesgully saved all the fruits to fruitDB");
//     }
// } );

// this is to find all the data from fruit database

Fruit.find(function(err, fruits) {
if (err) {
    console.log(err);
} else {
    mongoose.connection.close();
    console.log(fruits);
    
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
}
});


// Fruit.updateOne({_id: "5ec2d3cf0c491f04a68f06ed" }, {name: "Peach"},(err) => {
//         if(err) {
//             console.log(err);
    
//         } else {
//             console.log("succesfully updated to the fruits to fruitDB");
//         }
//     } );


Fruit.deleteOne({_id: "5ec2d3cf0c491f04a68f06ed" } , (err) => {
    if(err) {
        console.log(err);

    } else {
        console.log("succesfully deleted from the fruits to fruitDB");
    }
} );    


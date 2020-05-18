// Creating connection here


const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true});


// Making SCHEMA 

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

// Making Schema to model

const Fruit = mongoose.model("Fruit", fruitSchema);


// Giving First Entry

const fruit = new Fruit ({
     name :"Apple",
    rating: 6,
    review: "peach peachy "
});

const kiwi = new Fruit({
    name: "kiwi",
    rating : 4 ,
    review : "the best fruit!"
});


// this is to save the entry 

//   fruit.save();

//  this is to modify schema to add relation 

const personSchema = new mongoose.Schema ({
    name: String,
    age: Number ,
    petsName : String,
    favFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const mango = new Fruit ({
//     name :"mango",
//    rating: 6,
//    review: "mango fruity fresh and juicy"
// });

// mango.save();

const person = new Person ({
    name: "sailesh",
    age : 26,
    petsName: "jumbo",
    favFruit : kiwi 
});

//  person.save();


const orange = new Fruit({
    name: "orange",
    rating : 5 ,
    review : "type better way "
});

//  using update one to add or change polash favFruit entry

Person.updateOne({name: "polash" }, {favFruit : orange},(err) => {
        if(err) {
            console.log(err);
    
        } else {
            console.log("succesfully updated to Jhon favFruit ");
        }
    } );


// this is to give multiple entry now


// const kiwi = new Fruit({
//     name: "kiwi",
//     rating : 4 ,
//     review : "the best fruit!"
// });


// const orange = new Fruit({
//     name: "orange",
//     rating : 6 ,
//     review : "orange orange"
// });
    
// const banana = new Fruit({
//     name: "banana",
//     rating : 6 ,
//     review : "simple can eat without teeth"
// });

// using insertMany to add muliptle entry at once 

// Fruit.insertMany([kiwi, orange ,banana], (err) => {
//     if(err) {
//         console.log(err);

//     } else {
//         console.log("succesgully saved all the fruits to fruitDB");
//     }
// } );

// this is to find all the data from fruit database

// Fruit.find(function(err, fruits) {
// if (err) {
//     console.log(err);
// } else {
//     mongoose.connection.close();
//     console.log(fruits);
    
//     fruits.forEach(function(fruit){
//         console.log(fruit.name);
//     });
// }
// });

// this for update list using id

// Fruit.updateOne({_id: "5ec2d3cf0c491f04a68f06ed" }, {name: "Peach"},(err) => {
//         if(err) {
//             console.log(err);
    
//         } else {
//             console.log("succesfully updated to the fruits to fruitDB");
//         }
//     } );


// this for DELETE using id 
// can also use name or any other parameter


// Fruit.deleteOne({_id: "5ec2d3cf0c491f04a68f06ed" } , (err) => {
//     if(err) {
//         console.log(err);

//     } else {
//         console.log("succesfully deleted from the fruits to fruitDB");
//     }
// } );    


// this is for DELETE many with same name or different parameter can give using array


// Person.deleteMany({name: "jhon"}, (err) => {
//         if(err) {
//             console.log(err);
    
//         } else {
//             console.log("succesfully deleted all jhon from people");
//         }
//     });


// THIS IS ENDs
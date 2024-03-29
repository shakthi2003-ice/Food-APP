const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shakthimahendran2016:Golden%402025@cluster0.m8j5fwc.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err) console.log(err);
        else {
            console.log("Connected")
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function(err, data) {
                if (err) console.log(err);
                else {
                    const foodCategory = await mongoose.connection.db.collection("foodCategory");
                    foodCategory.find({}).toArray(async function(err, catData) {
                        if(err) console.log(err);
                        else{
                            global.food_items = data;
                            global.foodCategory = catData;
                        }
                    })
                }
            }) 
        }
    })
}

module.exports = mongoDB;
const mongoose = require('mongoose')


const connectdb=async ()=>{
try {

 await mongoose.connect('mongodb+srv://kamikaze:KGtG7Xh7b7G5bSd7@cluster0.8mco3.mongodb.net/?retryWrites=true&w=majority')
console.log('you are connected to the db ')

}catch(err){

console.log(err)

}

}

module.exports = connectdb
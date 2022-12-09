const mongoose = require('mongoose')

//creation de mon schema , 9alib 

const ContactSchema = mongoose.Schema({
// tektbou el structure mt3 el objet 
//ntdhkrou formulaire 

//key : Type 
//key :{Type:indict tuype , m3a parametres }
name: String , 
age : {
    type:Number
} ,
email:{
    type:String,
    required:true,
    unique:true
}

})

module.exports = mongoose.model('Conorkshoplist',ContactSchema)
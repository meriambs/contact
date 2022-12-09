const express = require ('express')

const  ContactSchema= require('../model/contact')

const contactRouter = express.Router()


//get all element , y3ni jiben les contact el kolla 
contactRouter.get('/',async(req,res)=>{

try{
const contacts =  await  ContactSchema.find()
res.status(200).json({msg:'you did it ', contacts})


}catch(err){
console.log(err)
          res.json({msg:'thema mochkel tnjimich tchouf les users el kolla ' })
}

})



//ajout mt3 les ocntact 

contactRouter.post('/add',async(req,res)=>{
    try{

        const newUser = new ContactSchema(req.body)
       await   newUser.save()

         res.json({msg:'you could add it ', newUser })

    }catch(err){
        console.log(err)
        res.json({msg:'you can not add a user '})
    }
})




module.exports = contactRouter
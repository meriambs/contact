const express = require('express')

const app = express()

//**************jiben el route principale */
const contactRouter = require('./routes/contact')
const port = 4002
//jiben el cors
const cors = require('cors')
//appel el cors 
app.use(cors())
// utilisation format msg json fil routes 
app.use(express.json())
// jiben el fonciton connect db 
const connectdb = require('./config/connectdb')
connectdb()

//***********appelation m3a el path  */
app.use('/api/contact',contactRouter)


app.listen(port,err=>{
    err?console.log(err):console.log(` go to ${port}`)
})
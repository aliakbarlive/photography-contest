const express=require('express')
const app=express()
var passPort=require('passport')
const cookieSession=require('cookie-session')
const mongoose=require('mongoose')
const keys=require('./config/keys')
const morgan =require('morgan')
const PORT=process.env.PORT||5000

require('./model/users')
require('./service/passPort')

mongoose.connect(keys.mongoURL,()=>{
    console.log("connected to MongoDb")
})
require('./routes/authRoute')(app)
app.use(morgan("combined"))
app.use(passPort.initialize())
app.use(passPort.session())
app.use( cookieSession({
    maxAge:'30*24*24*60*60*1000',
        keys:[keys.cookieKey]
    })
    )
  
app.listen(PORT,()=>{
    console.log('server is running '+PORT)
})






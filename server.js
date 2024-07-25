const {connectWithDb} = require("./db")
const express=require('express');
const app=express();
const cors = require('cors');

app.use(express.json())
app.use(cors("*"))
connectWithDb();

require('./Routes')(app)


app.get("/",(req,res)=>{
    return res.status(200).json({
        status:true,
        message:"Working"
    })
})

app.listen(3000,()=>{
    console.log(`App is running on port 3000`);
})
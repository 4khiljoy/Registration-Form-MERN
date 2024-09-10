const express= require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Employee = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())

// mongoose.connect("mongodb://localhost:27017/employee");
mongoose.connect("mongodb+srv://akhiljoy375:F2TQfXUd9Y1ckbR7@cluster0.gbmtg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post("/login",(req,res) => {
    const {email, password} = req.body;
Employee.findOne({email: email})
.then(user => {
    if(user){
        if(password === user.password){
            res.json("Success")
        }else{
        res.json("Wrong Password")
   // throw new Error("Wrong Password")
        }
    }else{
    res.json("User Not Found")
    }
})
})

app.post('/register',(req,res) => {
    Employee.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001,() => {
    console.log("server is running")
})
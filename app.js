const express = require("express");
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({extended : true}))
app.use(express.json())



const connected = require("./connection.js");
const User = require("./src/schema/userSchema")
const Luck = require("./src/schema/luck-schema")
const Thinking = require("./src/schema/thinking-schema")
const Outfit = require("./src/schema/Outfit-schema")

connected
.then(()=>{
    const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening on 8080"));
});


app.post("/postUser", (req, res)=>{
    // console.log(req.body)
    const {name, oneWord, feeling, date, id} = req.body
    let newUser = new User({
        name : name,
        oneWord : oneWord,
        feeling : feeling,
        date : date,
        id : id
    })

    console.log(newUser)
    newUser.save()
    .then(res=>console.log(res))
})



app.get("/get/user", (req, res)=>{
    User.find({}).exec()
    .then(result=>res.json(result))
})

app.get("/get/luck", (req, res)=>{
    Luck.find({}).exec()
    .then(result=>res.json(result))
})

app.get("/get/thinking", (req, res)=>{
    Thinking.find({}).exec()
    .then(result=>res.json(result))
})

app.get("/get/outfit", (req, res)=>{
    Outfit.find({}).exec()
    .then(result=>res.json(result))
})




const express = require("express")
const cors = require("cors")
require("dotenv").config()
const bodyParser = require("body-parser")
const mongodb = require("mongodb")
const { Collection } = require("mongoose")
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())
//always set the root path outside - not inside the mongoDB
app.get("/",(req,res)=>{
    res.send("Backend Server fo nftCart.com - Highly Confidential!")
})
mongodb.MongoClient.connect("mongodb+srv://KarthikNamboori:jEowXTygnO34kkNA@webtechprojectclass.hkblu6f.mongodb.net/test",(err,dbs)=>{
    console.log("Connected Successfully to the DB Atlas!")
    const db = dbs.db("projDB");
    const projCollection = db.collection("projCollection");
    app.get("/cartcheckout",(req,res)=>{
        projCollection.find({}).toArray((err,array)=>{
            // console.log(array[array.length -1])
            let res_data = array[array.length - 1]
            let sum = 0;
            Object.entries(res_data).map((ele,i) => {
                if(typeof ele[1].price == "number"){
                    sum+=ele[1].price
                }
            })
            sum = parseFloat(sum.toPrecision(3))
            const my_response = {
                data: res_data,
                total_price : sum
            }
            console.log(`The Final Price of Your Order is: ${sum}`)
            res.status(200).send(my_response)

        });
    })
    app.post("/cart",(req,res,next)=>{
        console.log(req.body)
        projCollection.insertOne(req.body,(err)=>{
            if (err) throw err;
            console.log("Order has been logged to the DataBase!");
        })
        res.status(200);
        //imp: Have to send the status back, or else the post request at the client is never really completed~!
    })
    


    
})



app.listen(5000, ()=>{
    console.log(`Listening to port ${port}`)
});
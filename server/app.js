const express = require('express')
const cors =require('cors')
const fs= require('fs')
const logger = require('./logger')
var app = express();
if (fs.readFileSync('./latest.json').toString()==""){
    fs.writeFileSync('./latest.json','{}')
}
app.use(cors())
app.get('/',(req,res) => {
    console.log("Okey");
})

app.get('/gettemp/:temp',(req,res)=> {
    var tempdata = req.params.temp.split("-")
    console.log(tempdata.length)
    console.log(req.ip)
    console.log('Your cpu temp is: ' + tempdata[0])
    if (JSON.parse(fs.readFileSync('latest.json'))[tempdata[1]]==null){
        res.send("You should register to send data")
    }
    else{if (tempdata.length == 1){
        console.log("this is unknown")
        tempdata.push("unknown")
    }
    if(tempdata[2]==null){
        tempdata[2]="name_unknown"
    }
    logger.temp(tempdata,req.ip)}
    
})

app.get('/getlatest',(req,res)=> {
    const latest = fs.readFileSync('./latest.json')
    res.json(JSON.parse(latest))
})
app.get("/register/:id",(req,res)=>{
    const requ = req.params.id.split('-')
    const json_data_as_json=JSON.parse(fs.readFileSync('latest.json'))
    if (json_data_as_json[req.params.id]!= null){
        res.send(req.params.id+"is already using please try with another one.")
    }
    else{
        if (requ[1]==undefined){
            requ[1]="name_unknown"
        }
        json_data_as_json[req.params.id]={
            id:parseInt(requ[0]),
            temp:null,
            name:requ[1],
        }
        fs.writeFileSync('latest.json',JSON.stringify(json_data_as_json))
    }
})
app.listen('5000')
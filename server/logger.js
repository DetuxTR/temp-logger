const fs = require('fs')
const writeJson = require('./writejson')
function readLastOperationNumber(){
    
}

 function writeTemp(temp,ip) {
    const code = Date.now().toString()+"-"+temp[0]+"-"+temp[1]+"-"+ip+"-"+temp[2]
    /*fs.appendFile("./logfile", code+'\n',function(err){
        if (err) throw err;
    })*/
    writeJson.writeJson(code)
}
module.exports.temp =  writeTemp
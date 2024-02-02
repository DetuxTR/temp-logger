const fs = require('fs')
function writeJson(code){
    const things = code.split('-')
    fs.appendFileSync('./latest.json',"")
    
    const json_data = fs.readFileSync('./latest.json')
    
    if (json_data.length==0){
        fs.writeFileSync("./latest.json","{}")
        const json_data = fs.readFileSync('./latest.json')
    }
    
    var json_data_as_json = JSON.parse(json_data);
    console.log(json_data_as_json[things[2]])
    if (json_data_as_json[things[2]]==undefined){
        json_data_as_json[things[2]]={
            id:parseInt(things[2]),
            temp:parseInt(things[1]),
            name:things[4]
        }
    };
    if(json_data_as_json[things[2]]!=undefined){
        json_data_as_json[things[2]]['temp']=parseInt(things[1])
    }
    console.log(json_data_as_json)
    fs.writeFileSync('latest.json',JSON.stringify(json_data_as_json))
}
module.exports.writeJson = writeJson
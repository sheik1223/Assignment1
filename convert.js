const http = require('http')
const fs = require('fs')
const path = require('path')
const csvToJson=require('csvtojson')

const csvFilePath='./customer-data.xls'

csvToJson().fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
        fs.writeFileSync(path.join(__dirname, 'converted-customer-data.json'), JSON.stringify(jsonObj))
    }).on('error', (error) => {
        console.error(`Got error: ${error.message}`)
        callback(error)
      })
    // Async / await usage
    //const jsonArray=await csv().fromFile(csvFilePath);

// csvToJson().fromFile('./customer-data.xls')
//     .then(customers=>{
//         //log the customers array
//         console.log(customers);
//         //fs.writeFileSync(path.join(__dirname, 'converted-customer-data.json'), customers)

//         fs.writeFileSync('converted-customer-data.json', JSON.stringify(customers))
//     }).catch(err => {
//         //log error 
//         console.log(err);
//     });
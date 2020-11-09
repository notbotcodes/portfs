const express = require("express");
const app = express();
const port= 8000;
const path= require('path')





  const staticPath= path.join(__dirname,'../public');
   app.use(express.static(staticPath)); 




app.get("/",(req,res)=>{
    res.send('elo from the express server');
} );

app.listen(port,()=>{

console.log("listening to port");



})
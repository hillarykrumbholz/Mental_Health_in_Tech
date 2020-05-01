const express = require('express')
const path = require("path")

const app = express();

//  This will change I am just getting node and express to work
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,"./index.html"));
});

app.listen(3000,function(){
  console.log('Server started on port 3000.....');
}); 

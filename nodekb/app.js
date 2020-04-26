const express = require('express')

const app = express();

//  This will change I am just getting node and express to work
app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000,function(){
  console.log('Server started on port 3000.....');
}); 

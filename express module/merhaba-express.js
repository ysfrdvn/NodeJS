const express = require("express");
const app = express();
const file = require("fs");

app.get('/', function (req, res) {
  file.readFile("expressIndex.html" , (error, data) =>{
      if(error)
        throw error;
      res.write(data)   
  });
});
app.get('/hello', function (req, res) {
    res.send("You are in the hello Page");
});

app.listen(3000, function () {
  console.log('Sunucu çalışıyor...');
});
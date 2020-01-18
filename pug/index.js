const express = require("express");
const app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render("index.pug");
});

app.listen(3000, function () {
  console.log('Sunucu Çalışıyor...');
});
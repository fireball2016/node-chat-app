const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);


app.listen(port, () => {
  console.log(`server started up at port ${port}`);
});

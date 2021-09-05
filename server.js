const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express();


app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'))


app.use(bodyparser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
          res.render('HomePage');
})



app.listen(3000, () => {
          console.log("Launched.");
})
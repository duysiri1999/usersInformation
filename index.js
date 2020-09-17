const express = require('express');
const userRoute = require('./routes/user.route');

const port = 9000

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', {
    name : 'ne'
  });
});
app.use('/users', userRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const bodyParser = require('body-parser')
const generator = require('./generator')


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const profession = req.body
  const fuckWords = generator(profession)
  res.render('index', { fuckWords: fuckWords })
})


app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})
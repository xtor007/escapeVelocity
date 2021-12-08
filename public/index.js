const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./mail')

const ev = express()

const PORT = 3001

ev.use(bodyParser.urlencoded({ extended: false }))

ev.use('/galaxy.html', express.static(__dirname + '/html/galaxy.html'))
ev.use('/index.html', express.static(__dirname + '/html/index.html'))
ev.use('/hyperbola.html', express.static(__dirname + '/html/hyperbola.html'))
ev.use('/parabola.html', express.static(__dirname + '/html/parabola.html'))
ev.use('/apparatus.html', express.static(__dirname + '/html/apparatus.html'))
ev.use('/loading3.gif', express.static(__dirname + '/img/loading3.gif'))
ev.use('/img.jpg', express.static(__dirname + '/img/img.jpg'))
//ev.use('main.css', express.static(__dirname + '/main.css'))


ev.post('/form',(req,res) => {
  console.log(req.body.email)
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(req.body.email)) {
    res.send('error email')
  } else if (req.body.name === '') {
    res.send('error name')
  } else {
    const message = {
      from: '<a.khramchenko.ip01@gmail.com>',
      to: 'tolxpams@gmail.com',
      subject: 'escape velocity',
      text: 'hello'
    }
    mailer(message)
    res.redirect('/form')
  }
})

ev.get('/form',(req,res) => {
  res.sendFile(__dirname + '/html/index.html')
})

ev.get('/main.css', function(req, res) {
  res.sendFile(__dirname + '/css/main.css')
})

ev.listen(PORT, () => console.log(`http://localhost:${PORT}/form`))

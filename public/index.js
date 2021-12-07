const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./mail')

const ev = express()

const PORT = 3001

ev.use(bodyParser.urlencoded({ extended: false }))

ev.use('/galaxy.html', express.static(__dirname + '/galaxy.html'))
ev.use('/index.html', express.static(__dirname + '/index.html'))
ev.use('/hyperbola.html', express.static(__dirname + '/hyperbola.html'))
ev.use('/parabola.html', express.static(__dirname + '/parabola.html'))
ev.use('/apparatus.html', express.static(__dirname + '/apparatus.html'))
ev.use('/loading3.gif', express.static(__dirname + '/loading3.gif'))
ev.use('/img.jpg', express.static(__dirname + '/img.jpg'))
//ev.use('main.css', express.static(__dirname + '/main.css'))


ev.post('/form',(req,res) => {

  const input = req.body.email
  //remError(input);
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)) {
    //addError(input)
    console.log('hui')
  }
  if (input.value === '') {
    console.log('hui2')
  }
  const message = {
    from: '<a.khramchenko.ip01@gmail.com>',
    to: 'tolxpams@gmail.com',
    subject: 'escape velocity',
    text: 'hello'
  }
  mailer(message)
  // if (req..classList.contains('_email')) {
  //   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)) {
  //     addError(input);
  //
  //   }
  // } else if (input.classList.contains('_name')) {
  //   if (input.value === '') {
  //     addError(input);
  //   }
  // }
  res.redirect('/form')
})

ev.get('/form',(req,res) => {
  res.sendFile(__dirname + '/index.html')
})

ev.get('/main.css', function(req, res) {
  res.sendFile(__dirname + '/main.css')
})

ev.listen(PORT, () => console.log(`http://localhost:${PORT}/form`))

  // function isNorm(form) {
  //   let countError = 0;
  //   let formReq = document.querySelectorAll('._req');
  //
  //   return countError;
  // }

  function addError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function remError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

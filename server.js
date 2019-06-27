// const http = require('http')

// http.createServer(function(request, response) {
//     response.writeHead(200, {
//         'Content-Type' : 'text/json'
//     })
//     response.end('hello world')
// }).listen(5432, '127.0.0.1')

// console.log('magic happen at http://127.0.0.1:5432/')


// const middlewareSatu = function(request, response, next)
// {
//     console.log('middleware pertama')
//     next()
// }

// const middlewareDua = function(request, response, next)
// {
//     console.log('middleware kedua')
//     next()
// }

// app.use(middlewareSatu)
// app.use(middlewareDua)

const path = require('path')
const express = require('express')
const data = require('./models/items.json')
const app = express()
const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'templates'))

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
    extend: false
}))
app.use(express.static('public'))

app.get('/', function(request, response) {
    response.render('index', {
        items: data
    })
})

app.get('/detail/:id', function(request, response) {
    const item = data.find(function(d) {
        return d.id === parseInt(request.params.id)
    })
    response.render('detail', {
        item : item
    })
})

app.get('/echo', function(request, response) {
    response.render('post')
})

app.post('/echo', function(request, response) {
    // console.log(request.body.nama)
    response.render('post', {
        nama: request.body.nama
    })
})

// app.get('/echo/:name', function(request, response) {
//     // response.send('this is from /echo routes calling: '+ request.params.nama +'')
//     response.render('index', {
//         greetings: request.params.name
//     })
// });

// app.get('/redirect', function(request, response) {
//     response.redirect('/echo/gagas')
// })

// app.get('/download', function(request, response) {
//     response.sendFile('C:/file-file gagassss/UNTITLED/my fuckin music/88RISING - Midsummer Madness ft. Joji, Rich Brian, Higher Brothers, AUGUST 08 (Official Music Vi.mp3')
// });

app.listen(8080, function() {
    console.log('magic happen at http://127.0.0.1:8080/')
})











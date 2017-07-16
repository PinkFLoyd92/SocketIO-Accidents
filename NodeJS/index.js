var io = require('socket.io')(app);
var http = require('http');
var ip = require('ip');
var bodyParser = require('body-parser')
var express = require('express'),

app = module.exports.app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var path = require('path');
app.use(express.static(path.join(__dirname, '')));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public'))) //static files served by public folder
app.use('/bower_components',  express.static(__dirname + '/bower_components')); //static files served by bower
var server = http.createServer(app);
var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : process.env.HOST ? process.env.HOST: 'localhost' ,
    user     : process.env.USER ? process.env.USER: 'root',
    password : process.env.PASS ? process.env.PASS: '123',
    database : process.env.DB ? process.env.DB: 'nodos',
});

var io = require('socket.io').listen(server);  //pass a http.Server instance
server.listen(9000);  //listen on port 80


app.get('/', function(req, res) {
// connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()
    res.render('index');
});

app.get('/ip',function (req, res) {
    res.send(ip.address())
})

app.io = io;
app.post('/newNode', function(req, res) {
    console.log(req.body)
    req.app.io.emit('nuevo nodo', {resource:req.body});
    console.log("new Node coming from python");
    res.send('');
});
app.listen(8000);

io.set('origins', '*:*');
io.on('connection', function (socket) {
    console.log("nueva conexion");
});

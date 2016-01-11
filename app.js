//Requiring node modules
var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var passport       = require('passport');
var cookieParser   = require('cookie-parser');
var methodOverride = require('method-override');
var jwt            = require('jsonwebtoken');
var expressJWT     = require('express-jwt');
var app            = express();
var port           = process.env.PORT || 3000;

//Requiring files 
var config         = require('./config/config');
var User           = require('./models/user');
var Petition       = require('./models/petition')
var secret         = require('./config/config').secret;

mongoose.connect(config.database);

require('./config/passport')(passport);

app.all("/auth", function(req, res){
  console.log(req);
})

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(express.static(__dirname + "/public"));

app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/login',    methods: ['POST'] }, 
      { url: '/api/register', methods: ['POST'] },
      { url: '/',             methods: ['GET']  }
    ]
  }));

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "Unauthorized Request."});
  }
  next();
})

var routes = require('./config/routes');
app.use('/api', routes);

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.listen(port);
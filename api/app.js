//Requiring node modules
var express        = require('express');
var cors           = require('cors');
var path           = require('path');
var morgan         = require('morgan');
var body-parser    = require('body-parser');
var mongoose       = require('mongoose');
var passport       = require('passport');
var cookieParser   = require('cookie-parser');
var methodOverride = require('methodOverride');
var jwt            = require('jsonwebtoken');
var expressJWT     = require('express-jwt');
var app            = express();

//Requiring files 
var config         = require('./config/config');
var User           = require('./models/user');
var secret         = require('.config/config').secret;
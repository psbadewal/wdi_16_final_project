var express = require('express');
var cors    = require('cors');
var path    = require('path');
var morgan  = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var methodOverride = require('methodOverride');
var jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
var app = express();


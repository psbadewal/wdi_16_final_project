var express = require('express'),
    router = express.Router();

var usersController = require('../controllers/usersController');
var authenticationsController = require('../controllers/authenticationsController');
var petitionsController = require('../controllers/petitionsController');

router.post('/login', authenticationsController.login)
router.post('/register', authenticationsController.register)

// router.route('/')
// .get(usersController.usersIndex)

router.route('/users')
.get(usersController.usersIndex)

router.route('/users/:id')
.get(usersController.usersShow)
.patch(usersController.usersUpdate)
.delete(usersController.usersDelete)

router.route('/petitions')
.get(petitionsController.petitionsIndex)

router.route('/petitions/:id')
.get(petitionsController.petitionsShow)


module.exports = router;

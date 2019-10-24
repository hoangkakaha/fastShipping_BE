const express = require('express');
const router = express.Router();
const AuthController = require('../App/Controllers/Http/AuthController');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');

const { validationResult } = require('express-validator');

const registerValidator = require('../App/Validators/registerValidator');


//router register
router.post('/register', registerValidator, (req, res, next)=>{

    const errors = validationResult(req);
    console.log(errors);
    AuthController.register({req, res, next});
});

router.post('/login', (req, res, next)=>{
    AuthController.login({req, res, next});
});

//required authen
router.use((req, res, next)=>{
    AuthenMiddleware.auth({req, res, next});
});

router.post('/logout', (req, res, next)=>{
    AuthenController.logout({req, res, next});
});



module.exports = router;

const express = require('express');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');
const AuthenController = require('../App/Controllers/Http/AuthController');
const router = express.Router();


router.use((req, res, next)=>{
    AuthenMiddleware.auth({req, res, next});
});
//get list user
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get list users'
    })
});


router.get('/getProfile', (req, res, next) => {
    AuthenController.getProfile({req, res, next});
});

router.put('/updateProfile', (req, res, next) => {
    AuthenController.updateProfile({req, res, next});
});


module.exports = router;

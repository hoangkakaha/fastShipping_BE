const express = require('express');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');
const router = express.Router();

router.use((req, res, next) => {
    AuthenMiddleware.auth({ req, res, next });
    // const { headers } = req;
    // console.log(headers);
    // next();
});

router.get('/', ( req, res, next) => {
    //TODO
    res.json({
        message: 'ok da xong'
    })
});

module.exports = router;

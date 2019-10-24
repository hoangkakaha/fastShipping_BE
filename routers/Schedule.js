const express = require('express');
const AuthenMiddleware = require('../App/Middlewares/AuthMiddleware');
const router = express.Router();

router.use((req, res, next) => {
    AuthenMiddleware.auth({ req, res, next });
});

router.get('/', ( req, res, next) => {
    //TODO
});

module.exports = router;

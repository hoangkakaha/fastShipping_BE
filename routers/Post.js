const express = require('express');
const router = express.Router();



//create post
router.get('/create', (req, res, next)=>{
    res.status(200).json({
        message: 'create post'
    })
});
router.post('/create', (req, res, next)=>{
    res.status(201).json({
        message: 'create post success'
    })
});
//get list post
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get list posts'
    })
});

//update posts
router.get('/update/:name', (req, res, next)=>{
    res.status(200).json({
        message: 'update post '+req.params.name
    })
});

router.put('/update/:id', (req, res, next)=>{
    res.status(200).json({
        message: 'update post' + req.params
    })
});

//get detail post
router.get('/detail-post/:name', (req, res, next) => {
    res.status(200).json({
        message: 'get detail post '+ req.params.name
    })
});



module.exports = router;
const express = require('express');
const { routes } = require('../../app');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message : 'Handling GET request to /products'
    })
})

router.post('/', (req,res,next) => {
    res.status(200).json({
        message : 'Handling POST request to /products'
    })
})

router.get('/:productId', (req,res,next) =>{

    const id = req.params.productId; 
    if (id === 'special') {
        res.status(200).json({
            message : 'You discoverd the special ID',
            id: id
        });
    }else{

        req.status(200).json({
            message: 'You Passed an ID'
        })
    }
});

router.patch('/:productId', (req,res,next) =>{
 
    res.status(200).json({
        message: 'Update Product!'
    })
});

router.delete('/:productId', (req,res,next) =>{
 
    res.status(200).json({
        message: 'Delete Product!'
    })
})


module.exports = router;
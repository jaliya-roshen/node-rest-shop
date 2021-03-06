const express = require('express');
const app = express();
const mprgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const morgan = require('morgan');

app.use(morgan('dev'));
 
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {

    const error = new Error();
    error.status = 404  ;
    next(error);
});

app.use((error, req, res, next) =>{

    res.status(error.status || 500 );
    res.json({
        error: {
            message : error.message
        }
    });
});

module.exports = app;


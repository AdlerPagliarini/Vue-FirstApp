var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://vue-user:vue-user123@ds117250.mlab.com:17250/vue-app', ['customers']);


// Get All Customers - http://localhost:3000/api/customers/
router.get('/customers', function(req, res, next){
    db.customers.find(function(err, customers){
        if(err) res.send(err);
        res.json(customers);
    });
});

// Get Single - http://localhost:3000/api/customers/5aea2734734d1d06be08829d
router.get('/customer/:id', function(req, res, next){
    db.customers.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, customer){
        if(err) res.send(err);
        res.json(customer);
    });
});

// Post
router.post('/customer', function(req, res, next){
    var customer = req.body;
    console.log(customer);
    if(!customer.first_name){
        res.status(400);
        res.json({
            "error" : "Bad Data" + customer.first_name
        });
    }else{
        db.customers.save(customer, function(err, customer){
            if(err) res.send(err);
            res.json(customer);
        });
    }
});

// Delete Single customer - http://localhost:3000/api/customer/5aea2734734d1d06be08829d
router.delete('/customer/:id', function(req, res, next){
    db.customers.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, customer){
        if(err) res.send(err);
        res.json(customer);
    });
});

// Put
router.put('/customer/:id', function(req, res, next){
    var customer = req.body;
   
    if(Object.keys(customer).length == 0){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }else{
        db.customers.update({_id: mongojs.ObjectId(req.params.id)},  customer, {}, function(err, customer){
            if(err) res.send(err);
            res.json(customer);
        });
    }
});

// to be accessible for other files
module.exports = router;
//declare variables
var User = require('../models/user');
const controller = {};

//
controller.test = (req, res)=>{
    res.send('Greetings my friend!');
}

controller.create = (req, res)=> {

    console.log(req.body);

    let user = new User(
        {
            _id: req.body.id,
            name: req.body.name,
            price: req.body.price
        }
    );

    user.save( err => {
        if (err) {
            console.log('Error: '+err)
            res.send(err);
            return;
        }
        res.send('User created successfully')
    })
}

module.exports = controller;
const db = require('../db');
const shortid = require('shortid');

class UserController {

    index(req, res) {
        res.render('users/index', {
          users : db.get('users').value()
        })
      }
    
    search(req, res) {
        var q = req.query.q;
        var matchedUsers = db.filter(function(user) { 
          return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 ;
        });
      
        res.render('users/index', {
          users: matchedUsers
        });
      }

    create(req, res) {
        res.render('users/create');
      }
      
    getId(req, res) {
        var id = parseInt(req.params.id);
        var user = db.get('users').find({ id : id}).value();
      
        res.render('users/view', {
          user: user,
        });
      }

    postCreate(req, res) {
        req.body.id = shortid.generate();
        var errors = [];

        if(!req.body.name){
          errors.push('Name is required');
        }

        if(!req.body.phone){
          errors.push('Phone is required');
        }

        if(errors.length > 0){
          res.render('users/create', {
            errors: errors,
            values: req.body,
          });
        }

        db.get('users').push(req.body).write();
        res.redirect('/users');
      }
      
}


module.exports = new UserController();
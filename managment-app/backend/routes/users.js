const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const ime = req.body.ime;
  const prezime = req.body.prezime;
  const email = req.body.email;

  const newUser = new User({ime,prezime,email});

  newUser.save()
    .then(() => res.json('Korisnik dodan'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('Korisnik izbrisan.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(user => {
        user.ime = req.body.ime;
        user.prezime = req.body.prezime;
        user.email =  req.body.email;
        
  
        user.save()
          .then(() => res.json('Korisnik izmjenjen!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  

module.exports = router;
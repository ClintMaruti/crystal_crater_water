const User = require("../models/users");

const usersController = {
  create(req, res) {
    if (
      !req.body.name ||
      !req.body.id_no ||
      !req.body.phone_no ||
      !req.body.meter
    ) {
      return res.status(400).json({ message: "Name is Required!" });
    }

    const user = new User(req.body);

    user
      .save()
      .then(results => {
        res.status(201).json({ message: "One User Added!", user: results });
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "An Error occured saving to the database!" });
      });
  },
  fetch(req, res) {
    User.find()
      .then(users => {
        if (users) {
          res.status(200).json({
            users
          });
        } else {
          res.status(404).json({
            message: "No Users available at the moment"
          });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: error.message
        });
      });
  }
};

module.exports = usersController;

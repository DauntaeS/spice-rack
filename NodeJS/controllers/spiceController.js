const express = require("express");
let router = express.Router();
let ObjectId = require("mongoose").Types.ObjectId;

let { Spice } = require("../models/spice");

// localhost:3000/spices
router.get("/", (req, res) => {
  Spice.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((err) => {
      console.log(
        "Error in Retrieving Spices: " + JSON.stringify(err, undefined, 2)
      );
    });
});

// localhost:3000/spices/id
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Spice.findById(req.params.id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log(
        "Error in Retriving Spice :" + JSON.stringify(err, undefined, 2)
      );
    });
});

// localhost:3000/spices
router.post("/", (req, res) => {
  let spc = new Spice({
    name: req.body.name,
    quantity: req.body.quantity,
    amount: req.body.amount,
    description: req.body.description,
    dateAdded: req.body.dateAdded,
    expDate: req.body.expDate,
  });
  spc
    .save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log("Error in Spice Save: " + JSON.stringify(err, undefined, 2));
    });
});

// localhost:3000/spices/id
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  let spc = {
    name: req.body.name,
    quantity: req.body.quantity,
    amount: req.body.amount,
    description: req.body.description,
    dateAdded: req.body.dateAdded,
    expDate: req.body.expDate,
  };
  Spice.findByIdAndUpdate(req.params.id, { $set: spc }, { new: true })
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log(
        "Error in Employee Update :" + JSON.stringify(err, undefined, 2)
      );
    });
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Spice.findByIdAndDelete(req.params.id)
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log(
        "Error in Spice Delete :" + JSON.stringify(err, undefined, 2)
      );
    });
});

module.exports = router;

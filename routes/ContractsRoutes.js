const express = require("express");
const { contractsModel } = require("../models/Contracts.model");
const { userModel } = require("../models/user.model");
const contractsController = express.Router();

/// Create a contract
contractsController.post("/", async (req, res) => {
  const {
    LenderId,
    BorrowerId,
    Principle,
    Interest,
    LoanStartDate,
    LoanDueDate,
    IsRepaid,
  } = req.body;
  const contract = new contractsModel({
    LenderId,
    BorrowerId,
    Principle,
    Interest,
    LoanStartDate,
    LoanDueDate,
    IsRepaid,
  });
  await contract.save();
  res.send("contract creadted");
});

module.exports = { contractsController };

const express = require("express");
const { successResponse } = require("../../constants/response");
const data = require("../../data");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("user router called");
});

userRouter.get("/all-products", (req, res) => {
  let products = data.products;
  let response = {};
  successResponse.data = products;
  res.send(successResponse);


});




module.exports = userRouter;

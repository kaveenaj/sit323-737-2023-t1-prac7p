const express = require("express");
const router = express.Router();

router.post("/add", (req, res) => {
  const operation = "add";
  const { num1, num2 } = req.body;
  // check if a and b are not numbers and return error if not
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      message: "Invalid input type",
    });
  }
  const result = num1 + num2;
  return res.json({
    result,
    message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
  });
});

router.post("/subtract", (req, res) => {
  const operation = "subtract";
  const { num1, num2 } = req.body;
  // check if a and b are not numbers and return error if not
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      message: "Invalid input type",
    });
  }
  const result = num1 - num2;

  return res.json({
    result,
    message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
  });
});

router.post("/multiply", (req, res) => {
  const operation = "multiply";
  const { num1, num2 } = req.body;
  // check if a and b are not numbers and return error if not
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      message: "Invalid input type",
    });
  }
  const result = num1 * num2;

  return res.json({
    result,
    message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
  });
});

router.post("/divide", (req, res) => {
  const operation = "divide";
  const { num1, num2 } = req.body;
  // check if a and b are not numbers and return error if not
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({
      message: "Invalid input type",
    });
  }
  const result = num1 / num2;

  return res.json({
    result,
    message: `New ${operation} operation requested: ${num1} ${operation} ${num2}`,
  });
});

module.exports = router;

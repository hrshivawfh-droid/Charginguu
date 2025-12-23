// middleware/error.middleware.js

module.exports = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Something went wrong",
    errorCode: "SERVER_500",
  });
};

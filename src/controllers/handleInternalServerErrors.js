const handleInternalServerErrors = (err, _req, res, _next) => {
  res.status(err.status || 500).json({
    message: `Inter server error : ${err.message}` || "Internal server error",
    status: err.status || 500,
    error: err.errors,
  });
};

module.exports = handleInternalServerErrors;

// middlewares/errorMiddleware.js

exports.errorMiddleware = (err, req, res, next) => {
    // Set the response status code
    res.status(err.status || 500);
  
    // Log the error for debugging purposes (can be expanded to use a logging library)
    console.error(err.stack);
  
    // Send the error response
    res.json({
      success: false,
      message: err.message || 'Internal Server Error',
    });
  };
  
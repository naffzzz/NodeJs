module.exports.validMiddleware = (req, res, next) => {
    // Middleware logic here
    console.log('Middleware is working');
    next(); // Call next to pass control to the next middleware or route handler
};

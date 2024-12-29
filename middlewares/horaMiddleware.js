function horaMiddleware(req, res, next) {
    const now = new Date();
    req.hora = now.getHours(); 
    next();
  }
  
  module.exports = horaMiddleware;
  
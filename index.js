module.exports = function(log) {
  return function(req, res, next) {
    var logAccess = "[" + req.ip + "] :" + req.url + " - " + req.headers["user-agent"] ;

    if (req.app.config.useProxy) {
      logAccess += "  - ips : " + req.ips;
    }

    log.info(logAccess);
    next();
  }
}

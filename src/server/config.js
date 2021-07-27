const path = require("path");

module.exports = (app) => {
  //Settings
  app.set("port", process.env.PORT || 3000);
  app.set("views", path.join(__dirname, "views"));
  //middlewares

  //routes

  //errorhandlers

  return app;
};

/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require("../api");

module.exports = function (app) {
  app.route("/api").get(api.index);
  app.route("/datos").get(api.datos);
};

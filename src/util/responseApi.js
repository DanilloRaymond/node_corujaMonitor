const logger = require("../util/loggers");

function responseApi(res, data, status, mensagem, statusCode, ErroServer) {
  if (statusCode === 500) {
    logger.error(ErroServer);
  }
  return res.status(statusCode).send({
    data,
    result: {
      status,
      mensagem,
    },
  });
}

module.exports = {
  responseApi,
};

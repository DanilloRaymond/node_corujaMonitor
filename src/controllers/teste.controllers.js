const { responseApi } = require("../util/responseApi");
exports.teste = async (req, res) => {
  const data = [
    {
      name: "Claudio",
      team: "TI",
    },
    {
      name: "Danillo",
      team: "TI",
    },
  ];

  return await responseApi(
    res,
    data,
    "success",
    "Teste API",
    200,
    "Erro Server"
  );
};

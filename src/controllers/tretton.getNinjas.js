const Scraper = require("../utils/scraper");

let allNinjas = [];

const scraper = new Scraper("https://api.tretton37.com/ninjas", true);

async function getNinjas(req, res) {
  let { pageNumber, pageSize } = req.query;

  if (!pageNumber) {
    pageNumber = 0;
  } else {
    pageNumber = parseInt(pageNumber);
  }
  if (!pageSize) {
    pageSize = 10;
  } else {
    pageSize = parseInt(pageSize);
  }

  const startIndex = pageNumber * pageSize;
  const endIndex = startIndex + pageSize;
  const prepareResponse = () => ({
    pageNumber,
    pageSize,
    length: allNinjas.length,
    data: allNinjas.slice(startIndex, endIndex),
  });

  if (allNinjas.length) {
    return res.json(prepareResponse());
  }

  try {
    allNinjas = await scraper.fetch();
    return res.json(prepareResponse());
  } catch (e) {
    return res.status(503).send(e.message);
  }
}

module.exports = getNinjas;

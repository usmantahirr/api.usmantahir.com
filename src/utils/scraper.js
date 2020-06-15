const rp = require("request-promise");

class Scraper {
  constructor(url, json) {
    this.options = {
      url,
      json,
    };
  }

  fetch() {
    return rp(this.options);
  }
}

module.exports = Scraper;

const express = require("express");

function runServer(urls) {
  const app = express();
  app.get("/", (req, res) => {
    const r = Math.floor(Math.random() * urls.length);
    res.status(301).redirect(urls[r]);
  });
  app.listen(80);
}

module.exports = runServer;

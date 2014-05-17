var db = require('./db.js');

module.exports = function (app) {
  app.post('/links', function (req, res) {
    console.log("Received:", req.body);
    db.Link.create(req.body).then(function () {
      res.send(200, req.body);
    });
  });

  app.get('/links', function (req, res) {
    db.Link.find(function (err, found) {
      res.json(found);
    });
  });
};

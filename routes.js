module.exports = function (app) {
  var links = [];

  app.post('/links', function (req, res) {
    console.log("Received:", req.body);
    links.unshift(req.body);
    res.send(200, req.body);
  });

  app.get('/links', function (req, res) {
    res.json(links.pop());
  });
};

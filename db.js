var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ng-news');

var linkSchema = mongoose.Schema({
  title: String,
  url: String,
  upvotes: {type: Number, default: 0}
});

var Link = mongoose.model('Link', linkSchema);

module.exports.Link = Link;
module.exports.db = mongoose.connection;
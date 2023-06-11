const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  postDate: Date,
  duration: String,
  teamSize: String,
  url: String,
  requirements: String,
  content: String,
  topic: String,
  creator: String
}, { collation: 'groups'});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
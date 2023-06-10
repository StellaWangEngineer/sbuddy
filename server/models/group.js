const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  duration: String,
  teamSize: String,
  url: String,
  requirements: String,
  topic: String,
  creator: String
});

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group;
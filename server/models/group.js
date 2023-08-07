const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  title: String,
  startDate: Date,
  postDate: Date,
  duration: String,
  teamSize: String,
  contact: String,
  requirements: String,
  notes: String,
  topic: String,
  creator: String
});

const Group = mongoose.model('Group', GroupSchema, 'groups');

module.exports = Group;
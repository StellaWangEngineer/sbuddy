var express = require('express');
var router = express.Router();

const Group = require('../models/group');

// Query groups according to conditions
router.get('/', function(req, res) {
    const {topic, title} = req.query;

    const query = {};
    if (topic) {
        query.topic = topic;
    }
    if (title) {
        query.title = title;
    }

    Group.find(query)
        .then(groups => {
            res.status(200).json(groups);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        })
        .finally(() => {
            return res.json(query);
        });
});

// Create a new group
router.post('/', function(req, res, next) {
    const group = new Group({
        title: req.body.title,
        startDate: req.body.startDate,
        postDate: req.body.postDate,
        duration: req.body.duration,
        teamSize: req.body.teamSize,
        url: req.body.url,
        requirements: req.body.requirements,
        topic: req.body.topic,
        creator: req.body.creator
    });

    group.save()
        .then(savedGroup => {
            res.status(201).json(savedGroup);
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal server error' });
        });
});

module.exports = router;
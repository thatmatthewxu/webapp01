'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  url: String,
  title: String,
  partNumber: String,
  color: String,
  price: String,
  weight: String,
  dimension: String,
  description: String,
  detail-desc: [{
    type: String
  }]
  imageURLs: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  imageLocalURLs:[{
    type: String
  }],
  createTime: {
    type: Date,
    'default': Date.now
  }
});

module.exports = mongoose.model('Item', ItemSchema);

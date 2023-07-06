
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const CollectionExampleSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    videoId: { type: String },
    level: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  }, { versionKey: false });

module.exports = mongoose.model('CollectionExample', CollectionExampleSchema);
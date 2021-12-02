const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ThinkingSchema = new Schema({
    thinking : String
},
{ collection: 'thinking' });

const Thinking = mongoose.model("Thinking", ThinkingSchema);

module.exports = Thinking;
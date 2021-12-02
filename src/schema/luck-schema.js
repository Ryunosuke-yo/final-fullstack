const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LuckSchema = new Schema({
    luck : String
},
{ collection: 'luck' });

const Luck = mongoose.model("Luck", LuckSchema);

module.exports = Luck;
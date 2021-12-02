const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OutfitSchema = new Schema({
    outfit : String
},
{ collection: 'outfit' });

const Outfit = mongoose.model("Outfit", OutfitSchema);

module.exports = Outfit;
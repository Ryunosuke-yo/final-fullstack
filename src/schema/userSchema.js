const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PeopleSchema = new Schema({
    
    name:{type:String,},
    oneWord:{type:String},
    feeling : {type : String},
    date : {type : String},
},
{ collection: 'user' });

const People = mongoose.model("People", PeopleSchema);

module.exports = People;
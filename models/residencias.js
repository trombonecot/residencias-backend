var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var resdienciaSchema = new Schema({  
  nom:    { type: String },
  description:     { type: Number }
});

module.exports = mongoose.model('Residencias', tvshowSchema);  
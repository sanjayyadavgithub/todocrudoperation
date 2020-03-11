const mongoose = require('mongoose');
const url = "mongodb+srv://mongoheroku:mongoheroku@cluster0-hlxtn.mongodb.net/test?retryWrites=true&w=majority";
//const url = 'mongodb://localhost:27017/employee';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var conn = mongoose.Collection;

var uploadSchema = new mongoose.Schema({
    imagename: String,

});

var uploadModel = mongoose.model('uploadimage', uploadSchema);
module.exports = uploadModel;
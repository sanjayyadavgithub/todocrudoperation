const mongoose = require('mongoose');
//const url = 'mongodb://localhost:27017/employee';
const url = "mongodb+srv://mongoheroku:mongoheroku@cluster0-hlxtn.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true
});
var conn = mongoose.Collection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalHour: Number,
    total: Number,
    image: String,
});

var employeeModel = mongoose.model('Employee', employeeSchema);
module.exports = employeeModel;
const mongoose = require('mongoose');
var url = 'mongodb+srv://shauli:8883@cluster0.sx71r.mongodb.net/UsersDB?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected successfully to MongoDB!'))
 .catch(err => console.error('Something went wrong', err));
//==============
const usersSchema = new mongoose.Schema({ 
firstname: String,
lastname: String,
userEmail: String,
userPassword: String,
gender: String,
telNo: String,
mobileNo: String,
day: String, 
year: String, 
month: String,
lastActiveAt: Date,
role: {
    type: String, 
    required :true,
    enum : ['user','admin'],
    default: 'user'
}
});

//================  
const loginSchema = new mongoose.Schema({ 
    userEmail: {type:String ,required:[true,"Must assign Username."]},
    userPassword: {type:String ,required:[true,"Must assign Password"]},
});
module.exports.User = mongoose.model('User', usersSchema)
const infoModels = require('./models/infomodels');
ObjectId = require('mongodb').ObjectID;
const User = infoModels.User;
// const Story = infoModels.Story;
//===================
const updateuserById = async (userID, userInfo) => {
    const x = await User.updateOne({ _id: userID }, userInfo, {strict: false });
    console.log(`updateuserById ${JSON.stringify(x)}`);
    return JSON.stringify(x);
};
exports.updateuserById = updateuserById;
//------------------------------------------
const getAllusers = async () => {
    const x = await User.find();
    console.log(`getAllusers ${JSON.stringify(x)}`);
    return JSON.parse(JSON.stringify(x));
};
exports.getAllusers = getAllusers;
//------------------------------------------
const getuserById = async (theID) => {
    const x = await User.findOne({ _id: theID });
    console.log(`getuserById ${JSON.stringify(x)}`);
    return x;
};
exports.getuserById = getuserById;
//------------------------------------------
const deleteuserById = async (theID) => {
    const x = await User.deleteOne({ _id: theID });
    console.log(`deleteuserById ${JSON.stringify(x)}`);
    return (`deleted ${x.n} documents`);
};
exports.deleteuserById = deleteuserById;
//------------------------------------------
//temporary solution TODO:jwt
const addNewuser = async (userInfo) => {
    console.log("--", JSON.stringify(userInfo));
    const newUser = new User(userInfo);
    const x = await newUser.save();
    console.log(`addNewuser ${JSON.stringify(x)}`);
    return (`added new user with id ${x._id}`);
};
exports.addNewuser = addNewuser;
// //------------------------------------------
const generateWelcomePageHTML = async (infoFromMongo, res) => {
    console.log("infoFromMongo: " + infoFromMongo);
    const x = await User.find();
    var path = require('path');
    if (infoFromMongo.includes("added new user with id")){  
        res.sendFile(path.join(__dirname, '../front-end/dist/src/welcomeUser.html'));
    }
    else{
        res.sendFile(path.join(__dirname, '../front-end/dist/src/erorPage.html'));
    }
};
exports.generateWelcomePageHTML = generateWelcomePageHTML;
// //------------------------------------------
// const generateLoginPageHTML = async (infoFromMongo, userInfo, res) => {
//     var path = require('path');
//     const x = await User.findOne();
//     if (infoFromMongo.includes(userInfo)){  
//         res.sendFile(path.join(__dirname, '../front-end/dist/src/welcomePage.html'));
//     }
//     else{
//         res.sendFile(path.join(__dirname, '../front-end/dist/src/erorPage.html'));
//         // res.sendFile(path.join(__dirname, '../front-end/dist/src/form.css'));
//     }
// };
// exports.generateLoginPageHTML = generateLoginPageHTML;
//==========================================
//verify login
const verifyLogin = async (userEmail,userPassword) => {
    const x = await User.findOne({ userEmail:userEmail, userPassword:userPassword })//temporary solution TODO:jwt
    if(x)
    {
        let myObj = {}
        myObj.role = x.role
        return myObj
    }
}
exports.verifyLogin=verifyLogin
//------------------------------------
const updateUserLoginByID = async()=>{
    const x = await Users.updateOne({_id: userID}, userInfo);
    return JSON.stringify(x);
}
exports.updateUserLoginByID = updateUserLoginByID
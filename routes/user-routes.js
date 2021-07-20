const express = require('express');
const router = express.Router();
const myrepository = require('../myrepository');
//--------------------------------------
router.post("/theregister", async (req, res) => {
    let x = await myrepository.addNewuser(req.body)
    myrepository.generateWelcomePageHTML(x, res);
});
//--------------------------------------
router.post("/thelogin", async (req, res) => {
    try {
        if(!req.body.userEmail || !req.body.userPassword){
            res.status(400).send("invalid Details")
        }
        const x = await myrepository.verifyLogin(req.body.userEmail, req.body.userPassword);
        if (x) {
            if (x.role === "admin") {
                console.log("going to redirect-url");
                res.redirect('https://www.shaulicohen.022.co.il/BRPortal/br/P103.jsp?cat=19275')


            }
            else if (x.role === "user") {
                let myObj={whereToRedirect:'hello'};
                res.json(myObj)
            }
        }
        else {
            res.status(401).send("user does not exist or wrong password entered ")
        }
    }
    catch{
        res.status(500).send("sorry internal server error")
    }
})
//     myrepository.generateLoginPageHTML(x, req.body, res);
// });
//--------------------------------------
module.exports = router;

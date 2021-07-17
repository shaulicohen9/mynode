const express = require('express');
const router = express.Router();
const myrepository = require('../myrepository');
//--------------------------------------
router.put("/:id", async (req, res) => {
 const x = await myrepository.updateuserById((req.params.id).trim(), req.body);
 res.send(x);
});
//--------------------------------------
router.get("/", async (req, res) => {
 const x = await myrepository.getAllusers();
console.log("hi");
 res.send(x);
});
//--------------------------------------
router.get("/:id", async (req, res) => {
 const x = await myrepository.getuserById(req.params.id);
 res.send(x);
});
//--------------------------------------
router.delete("/:id", async (req, res) => {
 const x = await myrepository.deleteuserById(req.params.id);
 res.send(x);
});
//--------------------------------------
router.post("/", async (req, res) => {
 console.log("---", req.body);
 const x = await myrepository.addNewuser(req.body);
 res.send(x);
});
//--------------------------------------
module.exports = router;
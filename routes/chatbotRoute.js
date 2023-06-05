// IMPORT REQUIRED DEPENDENCIES AND FILES
const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const router = express.Router()

// const { Configuration, OpenAIApi } = require("openai")


// // SETTING UP THE OPENAI 
// const configuration = new Configuration({
//     organization: "org-RHU1glZdsu50TP0XcywbC7e0",
//     apiKey: process.env.OPENAI_KEY,
// });
// const openai = new OpenAIApi(configuration);


// GETTING THE REQUEST
router.get("/role", async(req, res) => {
    try{
        console.log("Role");
        res.status(200).send("Role is Student");
        
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
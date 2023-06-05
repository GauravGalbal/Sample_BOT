// IMPORT REQUIRED DEPENDENCIES AND FILES
var dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var router = express.Router();

var SummaryTool = require('node-summary');


// GETTING THE REQUEST
router.get("/", async(req, res) => {
    try{
        console.log("summary");
        var title = "graph data to summary";
        const obj = {
            "gender": {
              "male": 52.3,
              "female": 47.7
            },
            "race": {
              "white": 72.1,
              "black": 12.3,
              "asian": 10.2,
              "hispanic": 5.4
            },
            "ethnicity": {
              "latino": 5.4,
              "non-latino": 94.6
            },
            "disability status": {
              "disabled": 10.1,
              "not disabled": 89.9
            },
            "veteran status": {
              "veteran": 12.3,
              "not veteran": 87.7
            }
          }

          let result = "";

          for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
              result += `${key} : `;
              const subObj = obj[key];
              for (const subKey in subObj) {
                if (Object.hasOwnProperty.call(subObj, subKey)) {
                  const value = subObj[subKey];
                  result += `${subKey} : ${value}. `;
                }
              }
            }
          }

          console.log(result);

        SummaryTool.summarize(title, result, function(err, summary){
            if(err) res.json("Something went wrong man!");
            res.status(200).json(summary);
        });

    }catch(err){
        res.status(400).json(err);
    }
});

module.exports = router;
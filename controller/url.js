const shortid = require("shortid");
const URL = require('../models/url')  //Import URL model :- Needed to perform database operations. Example:URL.create(), URL.findOne()


async function handleGenerateNewShortURL(req,res) {
    const body =req.body;
    console.log(req.body);
    if(!body || !body.url) return res.status(400).json({msg : "URL is Required"});

    const shortID = shortid(); //Generate unique short URL

    //Save Into Database
    await URL.create({          //Database insertion takes time thats why await 
        shortId: shortID,       //Save Short ID
        redirectUrl: body.url,  //Save Original URL
        visitHistory: [],       //Save  Visit History
    });

   // return res.json({});  //Send generated ID back to client.
    return res.render("home",{
        id: shortID
    })
}

async function handelGetAnalytics(req,res) {
    const shortId = req.params.shortId;                 //Get shortId from URL
    const result = await URL.findOne({ shortId});
           //Find Document in the databse
    return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory
});
}

module.exports = {
    handleGenerateNewShortURL,
    handelGetAnalytics
}
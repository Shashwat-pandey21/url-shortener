const express = require("express");
const path = require('path')                 //Path module helps work with folders and file paths.
const urlRoute = require("./routes/url");             // Import URL Routes
const { connectToMongoDB } = require("./connection"); //Import DB Connection Function
const URL = require('./models/url');                  //Import URL Model
const staticRoute = require("./routes/staticRouter");


const app = express();
const PORT = 8001;

//Connect MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB is Connected"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// set view engine (ejs)
app.set("view engine", "ejs")
app.set("views",path.resolve("./views")); //it tell all ejs files are in this folder 


//Register Routes
app.use("/url", urlRoute);
app.use("/", staticRoute);


//Redirect Logic -> Short URL se original URL par redirect karna
app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({ shortId},

        {
            $push: {visitHistory: { timeStamp: Date.now()} }
                
        }
    );

    res.redirect(entry.redirectUrl);
});

app.listen(PORT, ()=> console.log(`Server Run At Port: ${PORT}`))
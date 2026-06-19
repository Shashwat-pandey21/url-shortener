const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connection");
const URL = require('./models/url');

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(() => console.log("MongoDB is Connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({ shortId,

    },
        {
            $push: {visitHistory: { timeStamp: Date.now()} }
                
        }
    );

    res.redirect(entry.redirectUrl);
});

app.listen(PORT, ()=> console.log(`Server Run At Port: ${PORT}`))
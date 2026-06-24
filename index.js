const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectToMongoDB } = require("./connection");
const {
    restrictToLoggedinUserOnly,
    checkAuth,
} = require("./middlewares/auth");

const URL = require("./models/url");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/auth");

const app = express();
const PORT = 8001;

// Connect MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("MongoDB is Connected"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Routes
app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

// Redirect Logic
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timeStamp: Date.now(),
                },
            },
        }
    );

    if (!entry) {
        return res.status(404).send("Short URL Not Found");
    }

    res.redirect(entry.redirectUrl);
});

// Start Server
app.listen(PORT, () =>
    console.log(`Server Run At Port: ${PORT}`)
);
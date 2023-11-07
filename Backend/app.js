const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errorhandler=require("./middleware/error")

const authroutes=require("./routes/authroutes")

require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));

    app.use(morgan('dev'))
    app.use(bodyParser.json({limit:"5mb"}))
    app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true
}));
app.use(cookieParser())
app.use(cors)
app.use(errorhandler)

// app.get('/', (req, res) => {
//     res.send("Hello from Node Js");
// })

app.use("/api",authroutes)

const port=3000

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// Listening to index html
app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html")
});

//    The public folder which holds the CSS
app.use(express.static("public"));

//Listening on port 3000 and if it goes well then logging a message saying that the server is running
app.listen(process.env.PORT||3000,function () {
 console.log("Server is running at port 3000");
});




// Referensi code

//Sending the signup.html file to the browser as soon as a request is made on localhost:3000
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
//    });

// app.use(bodyParser.urlencoded({extended: true}));


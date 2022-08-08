const mongoose = require('mongoose');
const connection = "mongodb+srv://yashjeswani:zpr5Oa5fPxMWO8Cv@cluster0.heecjew.mongodb.net/herokudeploy?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


    // zpr5Oa5fPxMWO8Cv
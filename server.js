const app = require("./app");
const {default:mongoose}= require('mongoose');
const { PORT, MONGODB_URI } = require("./utils/config");

mongoose.connect(MONGODB_URI)
     .then(()=>{
        console.log("connecting to the database");
        console.log("starting the server");
        app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});
     })
     .catch((err)=> {
         console.log("Error on connecting to the database",err.message);
     });
       
     





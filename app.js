var express = require('express');
var app = express();
app.get("/",function(req,res){
	res.render("index.ejs")
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

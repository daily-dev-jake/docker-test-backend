const customer = require("./customer");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

app = express();   //THIS is an instance of Express Application (Web Server)
app.use(cors());   
app.use(bodyparser.json());

app.use(customer.router);

// When deployed to cloud, it will 
// randomly assign to us some random port, 
// therefore we need the process.env.port
app.listen(process.env.PORT || 3000, () => {
    console.log(`Backend listening at http://localhost:`+'3000');
  }); // Listen to port 5000

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.get("/", (req, res) =>{
    res.send("hello word");
});

app.listen(3000, () =>{
    console.log('listerning on port 3000');
})
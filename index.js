const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Youtube");
})

app.listen(3000,(req,res)=>{
    console.log('listening on 3000');
})
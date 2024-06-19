const express = require('express');
//const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//BodyParser middleware
app.use(express.json()); 

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
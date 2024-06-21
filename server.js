const express = require('express');
const path = require('path');

const app = express();

//BodyParser middleware
app.use(express.json()); 

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}
 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
const express = require('express');
const path = require('path');

const app = express();

//BodyParser middleware
app.use(express.json()); 

if(process.env.NODE_ENV === 'production'){
    app.get('/files/IQ_countries.csv', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'files', 'IQ_countries.csv'))
    })
    app.get('/files/shopping_habits.csv', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'files', 'shopping_habits.csv'))
    })
    app.get('/files/vgsale_1.csv', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'files', 'vgsale_1.csv'))
    })

    // Setting static folder
    app.use(express.static('client/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}
 
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
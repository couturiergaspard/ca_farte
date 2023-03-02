//Import  of express
const express = require('express'); 

//Creation of an access point
const path = require('path');

//My App
const app = express();

//MiddleWare
app.use(express.json())

//Creation de mon MiddleWare
const myMiddleWare = (req,res, next) => {
    res.send('Ok')
    console.log(Date.now());
    next();
}

//Response to get
app.get('/', (req, res) => {//(acces point, fun that is applied to each get request)
    res.cookie('name', 'tobi', {domain:'.example.com'})
    res.end()
})

app.post('/user', (req,res) =>{
    console.log(req.body);
    res.end()
})

//Listening port 
app.listen(3000, console.log("Server started on port 3000"));
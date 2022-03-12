const express = require('express');
const app = express();
const port = 3000;
const root = '/';
const userPath = '/user';

//app.METHOD(path, handler) for every http request method in a particular path

app.get(root, (request, response) => {
    response.send('Hello world!');
});

//Requests
app.post(root, (request, response) => {
    response.send('Got a POST request');
});

app.put(userPath, (request, response) => {
    response.send(`Got a PUT request in ${userPath}`);
});

app.delete(userPath, (request, response) => {
    response.send(`Got a DELETE request in ${userPath}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});

//We use the static method to deploy everything inside a folder
//********************** 
//for testing purposes go to localhost:3000/photo.jpeg
app.use(express.static('public'));
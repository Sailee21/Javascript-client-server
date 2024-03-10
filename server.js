const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to receive data from client
app.post('/sendData', (req, res) => {
    const receivedData = req.body;
    console.log('Received data from client:', receivedData);
    // Process the received data as needed
    // Sending back a response to the client
    res.send('Data received successfully.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

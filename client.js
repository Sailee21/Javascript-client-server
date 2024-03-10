const axios = require('axios');

// Data to send to the server
const dataToSend = {
    message: 'Hello, server!'
};

// URL of the server
const serverURL = 'http://localhost:3000/sendData';

// Sending data to the server using axios
axios.post(serverURL, dataToSend)
    .then(response => {
        console.log('Server response:', response.data);
    })
    .catch(error => {
        console.error('Error sending data to server:', error);
    });

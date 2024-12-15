const express = require('express');
const port = 3791;
const app = express();

// Middleware for handling JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




// Start the server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

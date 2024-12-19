const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
    const userInput = req.body.message;

    try {
        const response = await axios.post('https://gemini.googleapis.com/v1/chat', {
            query: userInput,
        }, {
            headers: {
                'Authorization': 'AIzaSyAANGrHEUNoKvbhqfDiHbfKPzqt8Dc3Olo',
                'Content-Type': 'application/json'
            }
        });
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); // Dodaje obsługę CORS
app.use(express.json());

app.post('/chat', (req, res) => {
    res.json({ response: "Hello from backend!" });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
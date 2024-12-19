const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Obsługuje CORS
app.use(express.json()); // Parsowanie JSON

// Endpoint /chat
app.post('/chat', async (req, res) => {
    const userInput = req.body.message;

    try {
        // Wysyłanie zapytania do zewnętrznego API (Gemini)
        const response = await axios.post('https://gemini.googleapis.com/v1/chat', {
            query: userInput,
        }, {
            headers: {
                'Authorization': 'AIzaSyAANGrHEUNoKvbhqfDiHbfKPzqt8Dc3Olo',
                'Content-Type': 'application/json'
            }
        });
        
        // Zwrócenie odpowiedzi z API
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong.');
    }
});

// Uruchomienie serwera
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

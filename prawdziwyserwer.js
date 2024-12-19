const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();


app.use(cors()); 
app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));


app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'No message provided.' });
    }

    try {
        
        const response = await axios.post('https://gemini.googleapis.com/v1/chat', {
            query: userMessage,
        }, {
            headers: {
                'Authorization': 'AIzaSyAANGrHEUNoKvbhqfDiHbfKPzqt8Dc3Olo',  
                'Content-Type': 'application/json'
            }
        });

        
        res.json({ response: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong with Gemini API.' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

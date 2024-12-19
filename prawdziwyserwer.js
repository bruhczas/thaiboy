const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    
    const botResponse = `Bot odpowiedział na: "${userMessage}"`;

 
    res.json({ response: botResponse });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

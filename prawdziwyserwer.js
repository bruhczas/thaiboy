const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serwowanie plików statycznych
app.use(express.static(path.join(__dirname, 'public')));

// Domyślny endpoint dla frontendu
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Uruchomienie serwera
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
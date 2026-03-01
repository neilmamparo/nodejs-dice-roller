const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // THIS IS REQUIRED FOR AZURE

app.use(express.static(__dirname))

app.get('/test', (req, res) => {
    res.send('Server is alive!');
});

// api endpoint
app.get('/roll/:count', (req, res) => {
    const count = parseInt(req.params.count);
    const diceResults = [];
    
    // random number generator
    for (let i = 0; i < count; i++) {
        // Generate a random number between 1 and 6
        const randomValue = Math.floor(Math.random() * 6) + 1;
        diceResults.push(randomValue);
    }
    
    // send the results back to the browser
    res.json({
        dice: diceResults,
        count: count
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
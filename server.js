const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // THIS IS REQUIRED FOR AZURE

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
    
    // Send the results back to the browser
    res.json({
        dice: diceResults,
        count: count
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
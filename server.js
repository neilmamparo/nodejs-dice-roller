const express = require('express');
const app = express();

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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
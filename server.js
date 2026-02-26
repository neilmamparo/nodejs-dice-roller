const express = require('express');
const app = express();

// api endpoint
app.get('/api/roll/:count', (req, res) => {
    const count = parseInt(req.params.count);
    const diceResults = [];
    
    // random number generator
    for (let i = 0; i < count; i++) {
        // This is the same Math.random() you used before!
        const randomValue = Math.floor(Math.random() * 6) + 1;
        diceResults.push(randomValue);
    }
    
    // Send the results back to the browser
    res.json({
        dice: diceResults,
        count: count
    });
});

app.listen(3000);
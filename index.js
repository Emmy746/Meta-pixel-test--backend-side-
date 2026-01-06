const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

// RUTHLESS SECURITY: Replace with your actual GitHub Pages URL
app.use(cors({
    origin: 'https://emmy746.github.io'
}));

// 1. The "Awake" Check
app.get('/', (req, res) => {
    res.send('Server is alive and breathing!');
});

// 2. The Lead Receiver
app.post('/submit-lead', (req, res) => {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log(`Lead captured: ${email}`);
    
    // In a pro setup, you'd send data to Meta CAPI here. 
    // For now, we just tell the Frontend: "Success!"
    res.status(200).json({ status: 'success', message: 'Lead verified' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

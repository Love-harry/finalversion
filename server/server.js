const express = require('express');
const path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/api/register', async (req, res) => {
    console.log(req.body)
});

app.listen(9999, () => {
    console.log(`server up at 9999`)
});
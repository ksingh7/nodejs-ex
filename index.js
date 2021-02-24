const express = require('express');

const app = express();
const PORT = 8080;

app.use('/images', express.static('./assets/images/'))

app.get('/', (req, res) => {
    return res.send(`
<body align="center">
<img src="/images/logo.png" /><br>
Bon voyage, Shipwright!
</body>
    `);
});

app.listen(PORT, () => {
    console.log(`Application is running at http://127.0.0.1:${PORT}`);
});
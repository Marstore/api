const app = require('express')();

app.listen(3000, () => console.log('Server On'));

app.get('/status', (req, res) => {
    res.send({
        javascript: 10,
        node: 10,
    });
})
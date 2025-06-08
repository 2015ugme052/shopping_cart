const app = require('./app');
const port = 4000;

app.listen(port, () => {
    console.log(`Shopping Cart API listening at http://localhost:${port}`);
});
const express = require('express');

const homeRoutes = require('./routes/home');

const app = express();

app.use('/', homeRoutes);

const PORT = process.env.PORT || 8001;

async function start() {
    try {

        app.listen(PORT, () => {

            console.log('Server running')
        });
    } catch (e) {
        console.log(e)
    }
}

start();

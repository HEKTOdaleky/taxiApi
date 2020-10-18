express = require('express');
cors = require('cors');

const homeRoutes = require('./routes/home');

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/', homeRoutes);

app.use(express.static('public'));
const port = 8001;

app.listen(port, () => {
    console.log(`Server started on ${port} port`);
});

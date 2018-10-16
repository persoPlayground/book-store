const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('dist'));

app.get('/api/books', (req, res) => {
    res.send( [{
        id: 1,
        title: 'book1',
        des:' some description',
        price: 111
    },
    {
        id: 2,
        title: 'book2',
        des:' some description',
        price: 222
    },
    {
        id: 3,
        title: 'book3',
        des:' some description',
        price: 333
    }
])
})
app.get('*', (req, res) =>{
    res.sendFile(path.resoleve(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}..`));


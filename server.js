const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();
app.use(express.static(path.join(__dirname, '')));

app.get('/',function(req,res) {
    res.sendFile('index.html', { root: __dirname });
});

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
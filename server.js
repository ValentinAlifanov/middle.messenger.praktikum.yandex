import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const host = 'localhost';
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/assets`));
app.use('/images',express.static(`${__dirname}/assets/images`));

app.get('*/*',(req, res) => {
    res.sendFile(path.join(__dirname,'dist', 'index.html'))
})
app.listen(process.env.PORT || PORT, host, function () {
    console.log(`Example app listening on port ${host}:${PORT}!`);
});
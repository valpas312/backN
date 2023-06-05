import fs from 'fs';

const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text);

fs.readFile('./archivoAsync.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
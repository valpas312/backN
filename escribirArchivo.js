import fs from 'fs';

const text = 'escribiendo archivo';

fs.writeFileSync('archivo.txt', text)

const textAsync = 'escribiendo archivo async';

fs.writeFile('archivoAsync.txt', textAsync, (err) => {
    if (err) throw err;
    console.log('Archivo creado');
});
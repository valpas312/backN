import fs from 'fs';

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
        err ? reject(err) : resolve(JSON.parse(data));
        });
    });
};

const writeFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, JSON.stringify(data), (err) => {
        err ? reject(err) : resolve(console.log("File written"));
        });
    });
};

export { getFile, writeFile };
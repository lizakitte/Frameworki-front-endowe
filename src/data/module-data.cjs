const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 
const eyes = ["blue", "green", "brown", "gray"];

fs.readFile('src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        const name = names[~~((Math.random() * names.length) / 1)];
        const person = {
            id: i + 1,
            name,
            eyes: eyes[~~((Math.random() * eyes.length) / 1)]
        }
        content += `${JSON.stringify(person, undefined, 4)},\n`
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});
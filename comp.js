const fs = require('fs');
const XLSX = require('xlsx');

///   HANDLE THE EXCEL   ///

const excelFile = XLSX.readFile('./Libro1.xlsx');

const sheetName = 'Hoja1';
const sheet = excelFile.Sheets[sheetName];

const D2 = 'D2';
const D3 = 'D3';
const D4 = 'D4';
const D5 = 'D5';
const E2 = 'E2';
const E3 = 'E3';
const E4 = 'E4';
const E5 = 'E5';

const D2value = sheet[D2].v;
const D3value = sheet[D3].v;
const D4value = sheet[D4].v;
const D5value = sheet[D5].v;
const E2value = sheet[E2].v;
const E3value = sheet[E3].v;
const E4value = sheet[E4].v;
const E5value = sheet[E5].v;

console.log(D2value);
///   HANDLE THE JSON   ///

const dataObject = JSON.parse(fs.readFileSync('./completion.json', 'utf8'));

dataObject.completionMatthew = Math.floor(D2value * 100) + '%';
dataObject.completionMark = Math.floor(D3value * 100) + '%';
dataObject.completionLuke = Math.floor(D4value * 100) + '%';
dataObject.completionJohn = Math.floor(D5value * 100) + '%';
dataObject.fromMatthew = E2value;
dataObject.fromMark = E3value;
dataObject.fromLuke = E4value;
dataObject.fromJohn = E5value;

console.log(dataObject.completionMatthew);
const dataString = JSON.stringify(dataObject, null, 2);

fs.writeFileSync('./completion.json', dataString);
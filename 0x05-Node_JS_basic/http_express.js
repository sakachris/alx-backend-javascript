const express = require('express');
const fs = require('fs');

const app = express();
const PORT_NUMBER = 1245;
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  } else {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const fieldNames = fileLines[0].split(',');
        const propNames = fieldNames.slice(0, fieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const record = line.split(',');
          const propValues = record.slice(0, record.length - 1);
          const field = record[record.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const entries = propNames.map((propName, index) => [
            propName,
            propValues[index],
          ]);
          studentGroups[field].push(Object.fromEntries(entries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (previous, current) => (previous || []).length + current.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DATABASE_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((error) => {
      responseParts.push(error instanceof Error ? error.message : error.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT_NUMBER, () => {
  console.log(`Server listening on PORT ${PORT_NUMBER}`);
});

module.exports = app;

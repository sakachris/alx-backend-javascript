const http = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.promises.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const fieldNames = lines.shift().split(',');
      const counters = {};

      lines.forEach((line) => {
        const [firstname, lastname, age, field] = line.split(',');

        if (firstname && lastname && age && field) {
          counters[field] = (counters[field] || 0) + 1;
        }
      });

      resolve({ lines, fieldNames, counters });
    })
    .catch(() => {
      reject(new Error('Cannot load the database'));
    });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(({ lines, fieldNames, counters }) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');

        console.log(`Number of students: ${lines.length}`);

        for (const field in counters) {
          if (Object.prototype.hasOwnProperty.call(counters, field)) {
            const studentsList = lines
              .filter((line) => line.split(',')[fieldNames.indexOf('field')] === field)
              .map((line) => line.split(',')[fieldNames.indexOf('firstname')]);
            res.write(`Number of students in ${field}: ${counters[field]}. List: ${studentsList.join(', ')}\n`);
          }
        }
        // Removed the newline character here
        res.end(); // End the response after sending all data
      })
      .catch(() => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;

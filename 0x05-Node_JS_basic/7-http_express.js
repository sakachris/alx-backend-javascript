const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(({ lines, fieldNames, counters }) => {
      const response = [`This is the list of our students`];
      response.push(`Number of students: ${lines.length}`);

      for (const field in counters) {
        if (Object.prototype.hasOwnProperty.call(counters, field)) {
          const studentsList = lines
            .filter((line) => line.split(',')[fieldNames.indexOf('field')] === field)
            .map((line) => line.split(',')[fieldNames.indexOf('firstname')]);
          response.push(`Number of students in ${field}: ${counters[field]}. List: ${studentsList.join(', ')}`);
        }
      }

      res.set('Content-Type', 'text/plain');
      res.send(response.join('\n'));
    })
    .catch((error) => {
      console.error(error); // Log the error for debugging
      res.status(500).send('Internal Server Error');
    });
});

const server = app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;

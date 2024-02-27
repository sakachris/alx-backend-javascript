const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const fieldNames = lines.shift().split(',');
    const counters = {};

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        counters[field] = (counters[field] || 0) + 1;
      }
    });

    console.log(`Number of students: ${lines.length}`);

    for (const field in counters) {
      if (Object.prototype.hasOwnProperty.call(counters, field)) {
        const studentsList = lines
          .filter((line) => line.split(',')[fieldNames.indexOf('field')] === field)
          .map((line) => line.split(',')[fieldNames.indexOf('firstname')]);
        console.log(`Number of students in ${field}: ${counters[field]}. List: ${studentsList.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

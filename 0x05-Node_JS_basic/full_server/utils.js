import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      const studentsByField = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });

      resolve(studentsByField);
    }
  });
});

export default readDatabase;

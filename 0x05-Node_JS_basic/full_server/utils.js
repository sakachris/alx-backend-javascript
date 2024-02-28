import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      const studentsByField = {};

      for (let i = 1; i < lines.length; i += 1) {
        const line = lines[i].split(',');
        const field = line[line.length - 1];
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(line[0]);
      }

      resolve(studentsByField);
    }
  });
});

export default readDatabase;

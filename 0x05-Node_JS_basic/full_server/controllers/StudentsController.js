import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      const response = ['This is the list of our students'];

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          response.push(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
        }
      }

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      const studentsByField = await readDatabase(process.argv[2]);
      const response = `List: ${studentsByField[major].join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;

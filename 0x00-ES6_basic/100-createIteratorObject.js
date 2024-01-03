export default function createIteratorObject(report) {
  function* generateEmployees() {
    const departments = Object.values(report.allEmployees);

    for (const employees of departments) {
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: generateEmployees,
  };
}

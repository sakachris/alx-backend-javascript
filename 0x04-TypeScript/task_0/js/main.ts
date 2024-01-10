// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "Peter",
    lastName: "Kimani",
    age: 20,
    location: "Kiambu",
  };
  
  const student2: Student = {
    firstName: "Ann",
    lastName: "Omondi",
    age: 22,
    location: "Homabay",
  };
  
  // Create an array named studentsList containing the two variables
  const studentsList: Student[] = [student1, student2];
  
  // Render a table using Vanilla Javascript
  const table = document.createElement("table");
  
  // Create table header
  const headerRow = table.insertRow(0);
  const headerCell1 = headerRow.insertCell(0);
  headerCell1.textContent = "First Name";
  const headerCell2 = headerRow.insertCell(1);
  headerCell2.textContent = "Location";
  
  // Append a new row to the table for each student in the array
  studentsList.forEach((student, index) => {
    const row = table.insertRow(index + 1);
    const cell1 = row.insertCell(0);
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell(1);
    cell2.textContent = student.location;
  });
  
  // Append the table to the body of the document
  document.body.appendChild(table);  

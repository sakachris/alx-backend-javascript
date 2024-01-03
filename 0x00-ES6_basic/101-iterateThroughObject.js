export default function iterateThroughObject(reportWithIterator) {
  // Using the spread operator to convert the iterator to an array
  const employeesArray = [...reportWithIterator];

  // Joining the array elements with ' | ' separator
  const result = employeesArray.join(' | ');

  return result;
}

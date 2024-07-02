export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;
  const studentid = students.map((student) => student.id);
  const sum = studentid.reduce((a, b) => { return a + b; }, 0);
  return sum;
}

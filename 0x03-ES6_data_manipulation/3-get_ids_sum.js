export default function getStudentIdsSum(student) {
  if (!student instanceof Array) return 0;
  const studentid = student.map((student) => student.id);
  const sum = studentid.reduce((a, b) => { return a + b; }, 0);
  return sum;
}

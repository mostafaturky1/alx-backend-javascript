export default function updateStudentGradeByCity(students, city, grade) {
  const final = students.filter((student) => student.location === city).map((studentid) => {
    const stud = grade.find((x) => x.studentId === studentid.id);
    return {
      ...studentid,
      grade: stud ? stud.grade : 'N/A'
    };
  });
  return final;
}

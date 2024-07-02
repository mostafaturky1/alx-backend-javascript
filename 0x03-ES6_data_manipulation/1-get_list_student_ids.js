export default function getListStudentIds(studentsIds) {
  if (!students instanceof Array) return [];
  return studentsIds.map((studentsIds) => studentsIds.id);
}

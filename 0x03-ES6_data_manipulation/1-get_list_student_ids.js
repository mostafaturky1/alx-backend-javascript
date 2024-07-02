export default function getListStudentIds(studentsIds) {
  if (!Array.isArray(studentsIds)) return [];
  return studentsIds.map((studentsIds) => studentsIds.id);
}

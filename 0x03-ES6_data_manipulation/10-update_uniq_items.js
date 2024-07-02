export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return new Map([...map].every(item => {
      if (item[1] === 1) {
        item[1] = 100;
      }
    }));
  }
}

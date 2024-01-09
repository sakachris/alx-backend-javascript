export default function cleanSet(set, startString) {
  const newArray = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (value.startsWith(startString)) {
      newArray.push(value.slice(startString.length));
    }
  }

  return newArray.join('-');
}

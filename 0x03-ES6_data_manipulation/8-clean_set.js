export default function cleanSet(set, startString) {
  const newArray = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);
      if (subStr && subStr !== value) {
        newArray.push(subStr);
      }
    }
  }

  return newArray.join('-');
}

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let firstLetter,
    secondLetter = {};
  s.split("").forEach((item) => {
    if (!firstLetter[item]) {
      firstLetter[item] = 1;
    } else {
      firstLetter[item] += 1;
    }
  });

  t.split("").forEach((item) => {
    if (!secondLetter[item]) {
      secondLetter[item] = 1;
    } else {
      secondLetter[item] += 1;
    }
  });

  for (let key in firstLetter) {
    if (firstLetter[key] !== secondLetter[key]) return false;
  }

  return true;
};

const getLongestName = (familyTree) => {
  let longestName = " ";

  familyNames = Object.keys(familyTree);

  familyNames.forEach((name) => {
    if (name.length >= longestName.length) longestName = name;
    if (familyTree[name]) {
      const longestSubName = getLongestName(familyTree[name]);

      if (longestSubName.length > longestName.length)
        longestName = longestSubName;
    }
  });
  return longestName;
};

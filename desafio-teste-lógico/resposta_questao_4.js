window.addEventListener('load', () => {
  calcRetirementYear();
});

function calcRetirementYear() {
  const matriz = [[1960, 2005], [1945, 2008], [1938, 1999]];
  let fullYear = [];
  const filtered = [];

  for (let year of matriz) {
    if (year[0] > 0 && year[0] < year[1] && year[1] > 0) {
      for (let i = year[0]; i <= year[1]; i++) {
        fullYear = [...fullYear, i];
      }
    } else {
      console.log("Inserir anos válidos");
      break;
    }
  }

  fullYear = new Map([...new Set(fullYear)].map(
    x => [x, fullYear.filter(y => y === x).length]
  ));

  let temp = 0;

  fullYear.forEach(num => {
    if (num > temp) {
      temp = num;
    }
  });

  const mapKeys = fullYear.keys();
  const mapValues = fullYear.values();

  fullYear.forEach(_num => {
    filtered.push({ year: mapKeys.next().value, val: mapValues.next().value })
  });

  const yearWorked = filtered.filter(value => {
    return value.val == temp;
  });

  Object.values(yearWorked).forEach(y => {
    console.log(y.year);
  });
}

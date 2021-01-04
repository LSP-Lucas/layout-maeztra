window.addEventListener('load', () => {
  init();
});

function init() {
  const arrValues = [4, 5, 44, 98, 4, 5, 6, 7, 98];

  const checkDuplicateValues = (arr) => {
    const newArr = arr.filter((value, i) => {
      return arr.indexOf(value) !== i;
    });

    return newArr;
  }

  console.log(checkDuplicateValues(arrValues));
}

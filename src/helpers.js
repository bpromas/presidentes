const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const isSorted = (arr) => {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    const currentNum = parseInt(arr[i], 10);
    const previousNum = parseInt(arr[i - 1], 10);

    if (isNaN(currentNum) || isNaN(previousNum) || currentNum < previousNum) {
      return false;
    }
  }

  return true;
};

export { shuffle, isSorted };

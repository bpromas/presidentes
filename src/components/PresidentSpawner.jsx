// Fisher-Yates shuffle: https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
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
}

function preprocess(response) {
  const bindings = response.results.bindings;

  const cleanPresidents = bindings.map((president, index) => ({
    presidentId: index + 1, // Assuming presidentId should be a unique identifier
    presidentPicture: president.presidentPicture.value,
    presidentLabel: president.presidentLabel.value,
    start_integer: president.start_integer.value,
  }));

  return cleanPresidents;
}

class PresidentSpawner {
  constructor(presidents) {
    this.presidents = shuffle(preprocess(presidents));
  }

  serve = () => {
    const nextPresident = this.presidents.pop();
    return nextPresident;
  };
}

export default PresidentSpawner;

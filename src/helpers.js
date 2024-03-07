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
    id: (index + 1).toString(), // Assuming presidentId should be a unique identifier
    presidentPicture: president.presidentPicture.value,
    presidentLabel: president.presidentLabel.value,
    start_integer: president.start_integer.value,
  }));

  return cleanPresidents;
}

export { shuffle, preprocess };

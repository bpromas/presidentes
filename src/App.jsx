import { useState } from "react";
import { isSorted } from "./helpers.js";
import EveryPresident from "./components/EveryPresident.js";
import SpawnArea from "./components/SpawnArea";
import Results from "./components/Results";
import Timeline from "./components/Timeline";
import MistakesCounter from "./components/MistakesCounter";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const presidents = EveryPresident;
  console.log(presidents.length);
  const [wrongPresidents, setWrongPresidents] = useState([]);
  const [presidentsIndex, setPresidentsIndex] = useState(1); //Começa do segundo da lista, o primeiro já começa na Timeline
  const [mistakes, setMistakes] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const [areas, setAreas] = useState({
    spawnarea: {
      id: "spawnarea",
      president: presidents[presidentsIndex],
    },
    timeline: {
      id: "timeline",
      presidentIds: [presidents[0].id],
    },
  });

  const markIncorrect = (draggableId) => {
    setMistakes(mistakes + 1);
    setWrongPresidents([...wrongPresidents, draggableId]);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (
      source.droppableId === "spawnarea" &&
      destination.droppableId === "timeline"
    ) {
      const timelineArea = areas[destination.droppableId];
      const spawnArea = areas[source.droppableId];

      const timelinePresidents = timelineArea.presidentIds;
      timelinePresidents.splice(destination.index, 0, draggableId);

      if (!isSorted(timelinePresidents)) {
        markIncorrect(draggableId);
        timelinePresidents.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
      }
      const newSpawn = {
        ...spawnArea,
        president: presidents[presidentsIndex + 1],
      };
      const newTimeline = {
        ...timelineArea,
        presidentIds: timelinePresidents,
      };

      if (presidentsIndex + 1 === presidents.length) {
        setGameFinished(true);
      } else {
        setPresidentsIndex(presidentsIndex + 1);
      }
      setAreas({
        ...areas,
        spawnarea: newSpawn,
        timeline: newTimeline,
      });
    }
  };

  return (
    <div className="app">
      <MistakesCounter mistakes={mistakes} />
      <DragDropContext onDragEnd={onDragEnd}>
        <SpawnArea area={areas["spawnarea"]} gameFinished={gameFinished} />
        <Results gameFinished={gameFinished} />

        <Timeline
          area={areas["timeline"]}
          presidents={presidents}
          wrongPresidents={wrongPresidents}
        />
      </DragDropContext>
    </div>
  );
}

export default App;

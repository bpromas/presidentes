import { useState, useEffect } from "react";
import EveryPresident from "./components/EveryPresident.js";
import { shuffle } from "./helpers.js";
import SpawnArea from "./components/SpawnArea";
import Timeline from "./components/Timeline";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [presidents, setPresidents] = useState(EveryPresident);
  useEffect(() => {
    setPresidents(shuffle(EveryPresident));
  }, []);

  const [presidentsIndex, setPresidentsIndex] = useState(0);

  const [areas, setAreas] = useState({
    spawnarea: {
      id: "spawnarea",
      president: presidents[presidentsIndex],
    },
    timeline: {
      id: "timeline",
      presidentIds: [],
    },
  });

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

      setPresidentsIndex(presidentsIndex + 1);

      const newSpawn = {
        ...spawnArea,
        president: presidents[presidentsIndex + 1],
      };
      const newTimeline = {
        ...timelineArea,
        presidentIds: timelinePresidents,
      };

      setAreas({
        ...areas,
        spawnarea: newSpawn,
        timeline: newTimeline,
      });
    }

    // const startPresidentIds = Array.from(start.presidentIds);
    // startPresidentIds.splice(source.index, 1);
    // const newStart = {
    //   ...start,
    //   presidentIds: startPresidentIds,
    // };

    // const finishPresidentIds = Array.from(finish.presidentIds);
    // finishPresidentIds.splice(destination.index, 0, draggableId);
    // const newFinish = {
    //   ...finish,
    //   presidentIds: finishPresidentIds,
    // };

    // setColumns({
    //   ...columns,
    //   [newStart.id]: newStart,
    //   [newFinish.id]: newFinish,
    // });
  };
  return (
    <div className="app">
      <DragDropContext onDragEnd={onDragEnd}>
        <SpawnArea area={areas["spawnarea"]} />

        <Timeline area={areas["timeline"]} presidents={presidents} />
      </DragDropContext>
    </div>
  );
}

export default App;

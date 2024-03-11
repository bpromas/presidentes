import PresidentCard from "./PresidentCard.jsx";
import { Droppable } from "react-beautiful-dnd";

function SpawnArea({ area, gameFinished }) {
  const president = area.president;
  if (!gameFinished) {
    return (
      <Droppable droppableId={area.id} direction="horizontal">
        {(provided) => (
          <div
            className="spawn-area"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <PresidentCard
              key={president.id}
              president={president}
              index={0}
              locked={false}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default SpawnArea;

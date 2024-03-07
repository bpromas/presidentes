import PresidentCard from "./PresidentCard.jsx";
import { Droppable } from "react-beautiful-dnd";

function Timeline({ area, presidents }) {
  return (
    <Droppable droppableId={area.id} direction="horizontal">
      {(provided) => (
        <div
          className="timeline"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {area.presidentIds.map((presidentId, index) => {
            const president = presidents.find(
              (pres) => pres.id === presidentId
            );
            return (
              <PresidentCard
                key={president.id}
                president={president}
                index={index}
                locked={true}
              />
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Timeline;

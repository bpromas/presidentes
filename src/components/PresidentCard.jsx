import React from "react";
import { Draggable } from "react-beautiful-dnd";

function PresidentCard({ president, index, locked }) {
  return (
    <Draggable draggableId={president.id} index={index} isDragDisabled={locked}>
      {(provided) => (
        <div
          className="president-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <img
            src={president.presidentPicture}
            alt={president.presidentLabel}
          />
          <div>{president.presidentLabel}</div>
        </div>
      )}
    </Draggable>
  );
}

export default PresidentCard;

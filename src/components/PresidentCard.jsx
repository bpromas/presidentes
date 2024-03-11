import React from "react";
import { Draggable } from "react-beautiful-dnd";

function PresidentCard({ president, index, locked, wrong }) {
  return (
    <Draggable draggableId={president.id} index={index} isDragDisabled={locked}>
      {(provided) => (
        <div
          className="president-card"
          data-wrong={wrong}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="president-picture-container">
            <img
              className="president-picture"
              src={president.presidentPicture}
              alt={president.presidentLabel}
            />
          </div>
          <div className="president-label">{president.presidentLabel}</div>
        </div>
      )}
    </Draggable>
  );
}

export default PresidentCard;

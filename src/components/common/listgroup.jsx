import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(l => (
        <li
          onClick={() => onItemSelect(l)}
          key={l[valueProperty]}
          className={
            l === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {l[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;

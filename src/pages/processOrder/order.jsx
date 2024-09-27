import React from "react";
import "./styled.css";

export default function Order(props) {
  const { e, i, completedOrder } = props;
  const confirmed = e.confirmed;

  return (
    <div className="card-process">
      <h3 className="title-process">MESA {e.table}</h3>

      <div
        className="div-list-process"
        style={{ backgroundColor: confirmed ? "#32b432" : "white" }}
      >
        {e.order.map((order, index) => (
          <div key={index} style={{ color: confirmed ? "white" : "black" }}>
            • {order.count} {order.name}
          </div>
        ))}
      </div>

      <a
        className="a-completed"
        onClick={() => {
          if (!confirmed) completedOrder(e, i);
        }}
      >
        {confirmed ? "Concluído" : "Concluir"}
      </a>
    </div>
  );
}

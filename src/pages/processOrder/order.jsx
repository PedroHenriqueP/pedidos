import React, { useState } from "react";
import "./styled.css";
// icones
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Order(props) {
  const { e, i, completedOrder } = props;

  const [open, setOpen] = useState(false);

  const confirmed = e.confirmed;

  return (
    <div className="card-process">
      <h3
        className="title-process"
        style={{ backgroundColor: confirmed ? "#73cd73" : "white", color: confirmed ? "white" : "black" }}
        onClick={() => setOpen(!open)}
      >
        <a>MESA {e.table}</a> <a>{open ? <FaAngleUp /> : <FaAngleDown />}</a>
      </h3>

      {open && (
        <>
          <div
            className="div-list-process"
            style={{ backgroundColor: confirmed ? "#73cd73" : "whitesmoke" }}
          >
            {e.order.map((order, index) => (
              <div key={index} style={{ color: confirmed ? "white" : "black" }}>
                • {order.count} {order.name}
              </div>
            ))}
          </div>

          <a
            className="a-completed"
            style={{ backgroundColor: confirmed ? "#73cd73" : "orange" }}
            onClick={() => {
              if (!confirmed) completedOrder(e, i);
            }}
          >
            {confirmed ? "Concluído" : "Concluir"}
          </a>
        </>
      )}
    </div>
  );
}

import React, { useState } from "react";
import "./styled.css";
import { options } from "./optionsGenerate";
// componentes
import OptionComponente from "./optionComponente";
import ConfirmOrder from "./confirmOrder";

export default function GenerateOrders() {
  const [order, setOrder] = useState([]);
  const [confirmOrder, setConfirmOrder] = useState(false);

  return (
    <>
      {confirmOrder && (
        <ConfirmOrder order={order} setConfirmOrder={setConfirmOrder} />
      )}

      <section className="section-generate">
        <div className="div-generate">
          <h2
            style={{ textAlign: "center", marginBottom: 30, color: "yellow" }}
          >
            Lista de Pedidos
          </h2>

          <a
            className="finalize-order"
            onClick={() => {
              if (order.length > 0) setConfirmOrder(true);
            }}
          >
            Finalizar Pedido
          </a>

          <a
            className="finalize-order"
            style={{ backgroundColor: "#4646ea", color: "white" }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Zerar lista
          </a>

          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            {options.map((e, i) => (
              <div key={i} style={{ width: "100%" }}>
                <OptionComponente order={order} setOrder={setOrder} data={e} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

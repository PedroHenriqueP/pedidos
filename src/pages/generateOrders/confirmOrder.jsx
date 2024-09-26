import React from "react";
import "./styled.css";

export default function ConfirmOrder(props) {
  const { order, setConfirmOrder } = props;

  function confirm(e) {
    const table = e.target[0].value;

    if (!table) return;
    var listaPedidos = window.localStorage.getItem("listaPedidos");

    var newItem = {
      table,
      order,
    };

    if (listaPedidos) {
      var allItem = JSON.parse(listaPedidos);

      allItem.push(newItem);

      window.localStorage.setItem("listaPedidos", JSON.stringify(allItem));
    } else {
      window.localStorage.setItem("listaPedidos", JSON.stringify([newItem]));
    }

    window.location.reload();
  }

  return (
    <>
      <section className="section-confirm">
        <div className="modal-confirm-order">
          <h3
            onClick={() =>
              console.log(
                JSON.parse(window.localStorage.getItem("listaPedidos"))
              )
            }
          >
            Confirme o pedido:
          </h3>

          <div style={{ marginBottom: 40 }}>
            {order.map((e, i) => (
              <div key={i} className="div-item-confirm">
                <a>{e.name}</a>
                <a>{e.count}</a>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              confirm(e);
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 40,
              }}
            >
              <input
                className="input-table"
                placeholder="digite o número da mesa"
                type="number"
              />
            </div>

            <div className="div-btn-confirm">
              <button
                className="btn-action"
                style={{ backgroundColor: "red" }}
                onClick={() => setConfirmOrder(false)}
              >
                Cancelar
              </button>
              <button
                className="btn-action"
                style={{ backgroundColor: "green" }}
                type="submit"
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

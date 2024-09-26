import React, { useState, useEffect } from "react";
import "./styled.css";
import Order from "./order";

export default function ProcessOrder() {
  const [list, setList] = useState([]);

  function getList() {
    var allItems = window.localStorage.getItem("listaPedidos");

    if (allItems) {
      setList(JSON.parse(allItems));
    } else setList([]);
  }

  function completedOrder(order, orderIndex) {
    console.log('func')
    var allItems = JSON.parse(window.localStorage.getItem("listaPedidos"));

    allItems[orderIndex] = { ...order, confirmed: true };

    window.localStorage.setItem("listaPedidos", JSON.stringify(allItems));

    getList();
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <section className="section-process">
        {list.length > 0 &&
          list.map((e, i) => (
            <div key={i}>
              <Order e={e} i={i} completedOrder={completedOrder} />
            </div>
          ))}
      </section>
    </>
  );
}

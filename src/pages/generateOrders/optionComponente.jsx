import React, { useState } from "react";
import "./styled.css";

export default function OptionComponente(props) {
  const { data, order, setOrder } = props;
  const [count, setCount] = useState(0);

  function changeItem(newCount) {
    setCount(newCount)
    var allItem = order;

    var search = allItem.find((e) => e.id === data.id);

    if (search) {
      search = { ...search, count: newCount };

      allItem = allItem.filter((e) => e.id != search.id);
      if(newCount !== 0){
        allItem.push(search)
      }
    } else {
      allItem.push({ ...data, count: newCount });
    }

    setOrder(allItem);
  }

  return (
    <>
      <div className="card-option">
        <img className="img-option" src={data.item} />
        <a>{data.name}</a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px 0"
          }}
        >
          <a
            className="addRemove-item"
            onClick={() => changeItem(count + 1)}
          >
            +
          </a>
          <a className="count">{count}</a>
          <a
            className="addRemove-item"
            onClick={() => {
              if (count > 0) {
                changeItem(count - 1);
              }
            }}
          >
            -
          </a>
        </div>
      </div>
    </>
  );
}

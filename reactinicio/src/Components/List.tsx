import { useState } from "react";

type Props = { data: [] };

function List({ data }: Props) {
  const [Index, setIndex] = useState(0);

  const handleClick = (i: number) => {
    setIndex(i);
  };
  return (
    <ul className="list-group">
      {data.map((elemt, i) => (
        <li
          className={`list-group-item ${Index == i ? "active" : ""}`}
          key={elemt}
          onClick={() => handleClick(i)}>
          {elemt}
        </li>
      ))}
    </ul>
  );
}

export default List;

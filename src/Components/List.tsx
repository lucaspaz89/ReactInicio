import { useState } from "react";

type Props = { data: string[]; onSelect?: (elemento: string) => void };

function List({ data, onSelect }: Props) {
  const [Index, setIndex] = useState(0);

  const handleClick = (i: number, element: string) => {
    setIndex(i);
    onSelect?.(element);
  };

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          className={`list-group-item ${Index == i ? "active" : ""}`}
          key={element}
          onClick={() => handleClick(i, element)}>
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;

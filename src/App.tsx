import Card, { CardBody } from "./Components/Card";
import Button from "./Components/Button";
import List from "./Components/List";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const lists: string[] = ["Son Goku", "Tanjiro", "Eren", "Vegeta"];
  const handleSelect = (element: string) => {
    console.log("Imprimiento ", element);
  };

  return (
    <Card>
      <CardBody title={"Hola Mundo"} text={"El Texto del Componente"} />
      {lists.length !== 0 ? (
        <List data={lists} onSelect={handleSelect} />
      ) : (
        "No hay elementos para mostrar"
      )}
      <Button>"Hola munto"</Button>
    </Card>
  );
}

export default App;

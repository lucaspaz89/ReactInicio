import Card, { CardBody } from "./Components/Card";
import Button from "./Components/Button";
import List from "./Components/List";
import { useState } from "react";

function App() {
  //const [isLoading, setIsLoading] = useState(false);
  //const handleClick = () => setIsLoading(!isLoading);
  const [data, setData] = useState(["Son Goku", "Tanjiro", "Eren", "Vegeta"]);

  //const lists: string[] = ["Son Goku", "Tanjiro", "Eren", "Vegeta"];
  /*const handleSelect = (element: string) => {
    console.log("Imprimiento ", element);
  };*/

  /*return (
    <Card>
      <CardBody title={"Hola Mundo"} text={"El Texto del Componente"} />
      {lists.length !== 0 ? (
        <List data={lists} onSelect={handleSelect} />
      ) : (
        "No hay elementos para mostrar"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola munto
      </Button>
    </Card>
  );*/

  /*ejercicios */
  const addMinions = () => setData([...data, "Minions"]);
  const delMinions = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button onClick={addMinions}>Agregar +</Button>
      <Button onClick={delMinions}>Eliminar -</Button>
      <p />
      <List data={data} />
    </Card>
  );
}

export default App;

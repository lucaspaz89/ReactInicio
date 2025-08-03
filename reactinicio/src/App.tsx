import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const lists = ["Goku", "Tanjiro", "Eren"];

  return (
    <Card>
      <CardBody title={"Hola Mundo"} text={"El Texto del Componente"} />
      <List data={lists} />
    </Card>
  );
}

export default App;
//<CardBody  title={"Hola Mundo"} text={'El Texto del Componente'} />

import { useParams } from "react-router";

function Coin() {
  const { id } = useParams<string>();

  console.log(id);

  return <h1>Coin</h1>;
}

export default Coin;

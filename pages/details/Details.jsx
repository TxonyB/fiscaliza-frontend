import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Details({ contrato }) {
  return (
    <div>
      <NavBar />
      <h1 className="text-4xl px-4 py-4 font-medium">Meus Contratos</h1>
      <Card/>
    </div>
  );
}
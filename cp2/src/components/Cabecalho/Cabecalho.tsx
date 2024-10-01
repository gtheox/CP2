import Menu from "../Menu/Menu";

export default function Header() {
  return (
    <header className="cabecalho p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Worlds in Collision - Explorando as Ideias de Immanuel Velikovsky
      </h1>
      <Menu />
    </header>
  );
}

import Link from "next/link";

export default function Menu() {
    return (
        <nav className="mt-4">
            <ul className="flex justify-center space-x-6">
                <li className="border-r-2 border-gray-300 pr-4 last:border-r-0">
                    <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                </li>
                <li className="border-r-2 border-gray-300 pr-4 last:border-r-0">
                    <Link href="/venus" className="text-blue-600 hover:underline">Teoria do Nascimento de Vênus</Link>
                </li>
                <li className="border-r-2 border-gray-300 pr-4 last:border-r-0">
                    <Link href="/calculo" className="text-blue-600 hover:underline">Cálculo</Link>
                </li>
                <li className="border-r-2 border-gray-300 pr-4 last:border-r-0">
                    <Link href="/livro" className="text-blue-600 hover:underline">Livro</Link>
                </li>
                <li>
                    <Link href="/biografia" className="text-blue-600 hover:underline">Biografia</Link>
                </li>
            </ul>
        </nav>
    );
}

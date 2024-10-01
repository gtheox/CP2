import React from 'react';
import Image from "next/image";

const BookProfile: React.FC = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center">Immanuel Velikovsky</h1>
      
      <Image src={"/img/livro.jpg"} alt='Capa do livro de Immanuel Velikovsky' width={330} height={330} />
      <p className="text-lg leading-relaxed text-center">
        Immanuel Velikovsky (1895–1979) foi um escritor polêmico que se destacou por suas obras sobre a história do sistema solar e da Terra, incluindo o famoso Mundos em Colisão, lançado em 1950.
      </p>
    </div>
  );
}

export default BookProfile;
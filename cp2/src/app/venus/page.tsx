import React from 'react';
import Image from "next/image";

const VenusTheory: React.FC = () => {
    return (
        <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center">A Teoria sobre o Nascimento de Vênus</h1>

            <Image src={"/img/venus.jpeg"} alt='Imagem de Vênus' width={330} height={330} />
            <p className="text-lg leading-relaxed text-center">
                Velikovsky postulou que Vênus era originalmente um cometa desprendido de Júpiter, que cruzou o caminho de outros corpos celestes no Sistema Solar. Ele propôs que os gases quentes liberados por esse cometa foram responsáveis pelas dez pragas do Egito Antigo.
            </p>
        </div>
    );
}

export default VenusTheory;
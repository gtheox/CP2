import React from 'react';
import Image from "next/image";

const AuthorProfile: React.FC = () => {
    return (
        <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center">Immanuel Velikovsky</h1>

            <Image className='w-64 h-auto mb-6' src={"/img/Velikovsky.jpeg"} alt='Immanuel Velikovsky' width={580} height={580} />
            <p className="text-lg leading-relaxed text-center">
                Immanuel Velikovsky (em russo: Иммануил Великовский; 10 de junho de 1859 - 17 de novembro de 1979) foi um psiquiatra russo de origem judaica, reconhecido por seus livros polêmicos que reavaliam eventos da história antiga, sendo seu trabalho mais notável Mundos em Colisão, publicado em 1950. Antes de sua notoriedade, ele foi cofundador da Universidade Hebraica de Jerusalém em Israel e atuou como psiquiatra e psicanalista.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-center">
                Nos seus escritos, Velikovsky utiliza mitologia comparativa e fontes literárias arcaicas (incluindo o Antigo Testamento) para sugerir que a Terra passou por interações catastróficas com outros planetas (particularmente Vênus e Marte) em épocas passadas. Astrônomos britânicos como Victor Clube e Bill Napier o colocam entre os catastrofistas, afirmando que ... Velikovsky não é apenas o precursor dos novos catastrofistas, mas sim o último de uma tradição de catastrofistas que remonta à Idade Média e talvez antes. Ele acreditava que os fenômenos eletromagnéticos desempenhavam um papel significativo na mecânica celeste e propôs uma revisão das cronologias do Antigo Egito, Grécia, Israel e outras civilizações do Oriente Próximo. A cronologia alterada buscava explicar a chamada idade das trevas do leste do Mediterrâneo (c. 1100-750 AEC) e reconciliar a narrativa bíblica com a arqueologia e a cronologia egípcia.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-center">
                As teorias de Velikovsky, em geral, são frequentemente ignoradas ou fortemente contestadas pela comunidade científica. Contudo, seus livros continuam a vender bem e são recebidos com entusiasmo por muitos leigos, que frequentemente mencionam um tratamento injusto por parte da academia convencional. A controvérsia em torno de seu trabalho e sua recepção é frequentemente referida como O Caso Velikovsky. Seu trabalho é frequentemente citado como um exemplo clássico de pseudociência, além de ilustrar o dilema da demarcação.
            </p>
        </div>
    );
}

export default AuthorProfile;
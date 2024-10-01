import React from 'react';

const GravitationalCalculation: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Cálculo da Força Gravitacional</h1>
            <p className="text-lg">
                A fórmula utilizada é: <span className="font-mono">F = G * (m₁ * m₂) / r²</span>
            </p>
            <p className="mt-4 text-lg">
                Onde os parâmetros são definidos como:
                <ul className="list-disc list-inside mt-2">
                    <li><strong>F</strong> representa a força gravitacional entre dois objetos</li>
                    <li><strong>G</strong> é a constante gravitacional universal</li>
                    <li><strong>m₁</strong> e <strong>m₂</strong> são as massas dos objetos em questão</li>
                    <li><strong>r</strong> indica a distância entre os centros de massa dos dois objetos</li>
                </ul>
            </p>
        </div>
    );
}

export default GravitationalCalculation;
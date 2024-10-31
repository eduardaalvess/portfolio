import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
    const [text, setText] = useState('');
    const fullText = '  Olá, sou Eduarda Alves!';

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            if (index < fullText.length) {
                setText((prevText) => prevText + fullText.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 150); 

        return () => clearInterval(intervalId);
    }, [fullText]);

    return (
        <header className="header">
            <div>
                <h1>{text}</h1>
                <h4>Seja bem-vindo ao meu portfólio.</h4>
                <p className="lead">
                    Tenho formação em Computação em Nuvem e experiência como Back-End Developer.<br />
                    Tenho experiências nas linguagens: Java, Python, JavaScript e C# e nos frameworks Spring Boot, React e .NET.
                </p>
            </div>
        </header>
    );
}

export default Header;

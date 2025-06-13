// import React from 'react';
import header from './header.module.css'; // Assumindo CSS Modules
import imagem from "./imagens/Group 1.png";


export default function Header() {
  return (

    <header className={header.headerContainer}>
     <img src={imagem} alt="MyContacts"/>
    </header>
    
  );
};

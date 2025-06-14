import React from 'react';
import stylesNoFound from './noContactsFound.module.css'; // Crie este arquivo CSS
import img from "../img/not-found.png";

interface NoContactsFoundProps {
  message?: string; // Propriedade opcional para personalizar a mensagem
}

export default function NoContactsFound({ message }: NoContactsFoundProps) {
  return (
    <div className={stylesNoFound.noContactsContainer}>
      <p className={stylesNoFound.noContactsMessage}>
        {message || "Nenhum contato encontrado. Que tal adicionar um agora?"}
      </p>
      

      <img src={img} alt="Lista vazia" className={stylesNoFound.noContactsIcon} />
      
    </div>
  );
}
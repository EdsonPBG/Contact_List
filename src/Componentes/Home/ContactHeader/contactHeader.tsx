// import React from 'react';
import styleHome from "../home.module.css";

interface ContactHeaderProps {
    contactCount: number;
    onCreateContact: () => void
}

export function ContactHeader ({ contactCount, onCreateContact }: ContactHeaderProps) {
  return (
    <div className={styleHome.createContact}>
        <p className={styleHome.contactsCounter}>
            <span className={styleHome.count}>{contactCount} Contatos </span>
        </p>
        <button onClick={onCreateContact} className={styleHome.createContactButton}>
            Novo Contato
        </button>
    </div>
  )
}

export default ContactHeader;
// import React from 'react';
import styleHome from "../home.module.css";

interface Contact {
    name: string;
    telefone: string;
    email: string;
}

interface ContactItemProps {
    contact: Contact;
    onEdit: (name: string) => void;
    onDelete: (name: string) => void;
}

export function ContactItems ({ contact, onEdit, onDelete }: ContactItemProps) {
  return (
   <li key={contact.name} className={styleHome.contactItem}>
        <div className={styleHome.contactInfo}>
            <h3 className={styleHome.contactName}>{contact.name}</h3>
            <p className={styleHome.contactTelefone}>Telefone {contact.telefone}</p>
            {contact.email && <p className={styleHome.contactEmail}>Email: {contact.email}</p>}
        </div>
        <div className={styleHome.contactActions}>
            <button onClick={() => onEdit(contact.name)} className={styleHome.actionButtonEdit}>
                Editar
            </button>
            <button onClick={() => onDelete(contact.name)} className={styleHome.actionButtonDelete}>
                Excluir
            </button>
        </div>
   </li> 
  );
}

export default ContactItems;
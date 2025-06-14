// import React from 'react';
import SelectForm from "../../SelectForm/selectForm";
import styleHome from "../home.module.css";
import type { Contact } from "../../../Types/types"

interface ContactItemProps {
    contact: Contact;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export function ContactItems ({ contact, onEdit, onDelete }: ContactItemProps) {
  return (
  <li className={styleHome.contactItem}>
      <div className={styleHome.contactInfo}>
        <p className={styleHome.contactName}>
          {contact.name}
          {/* --- AQUI ESTÁ A MUDANÇA PARA EXIBIR A REDE SOCIAL --- */}
          {contact.redeSocial && ( // Renderiza apenas se 'redeSocial' existir
            <span className={styleHome.contactSocial}>
              ({contact.redeSocial})
            </span>
          )}
        </p>
        <p className={styleHome.contactPhone}>Telefone: {contact.telefone}</p>
        {contact.email && <p className={styleHome.contactEmail}>Email: {contact.email}</p>}
         
      </div>
      <div className={styleHome.contactActions}>
        <button onClick={() => onEdit(contact.id)} className={styleHome.editButton}>Editar</button>
        <button onClick={() => onDelete(contact.id)} className={styleHome.deleteButton}>Excluir</button>
      </div>
    </li>
  );
}

export default ContactItems;
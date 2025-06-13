// import React from 'react';
import styleHome from "../home.module.css"; // Importe o CSS localmente
import ContactItems from "../ContactItems/contactItems"; // Importe o novo componente ContactItem

interface Contact {
    name: string;
    telefone: string;
    email: string;
}

interface ContactListProps {
  contacts: Contact[];
  onEditContact: (name: string) => void;
  onDeleteContact: (name: string) => void;
}

export function ContactList({ contacts, onEditContact, onDeleteContact }: ContactListProps) {
  return (
    <div className={styleHome.contactsListContainer}>
        {contacts.length > 0 ? (
            <ul className={styleHome.contactList}> 
                {contacts.map((contact: Contact) => (
                    <ContactItems 
                    key={contact.name}
                    contact={contact}
                    onEdit={onEditContact}
                    onDelete={onDeleteContact}
                    />
                ))}
            </ul>
        ) : (
            <p className={styleHome.noContactsMessage}> Nenhum Contato Encontrado!! </p>
        )};
    </div>
  )
}

export default ContactList;
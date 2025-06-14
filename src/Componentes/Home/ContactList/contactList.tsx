import React from 'react'; // É uma boa prática importar React, mesmo que não esteja usando explicitamente o JSX namespace
import styleHome from "../../Home/home.module.css"; // Ajuste o caminho do CSS localmente conforme sua estrutura
import ContactItems from "../ContactItems/contactItems"; // Importe o componente ContactItems
import stylesNoFound from '../NoContactsFounded/noContactsFound.module.css';
import img from "../img/not-found.png";

import type { Contact } from "../../../Types/types"

interface ContactListProps {
    contacts: Contact[];
    onEditContact: (name: string) => void;
    onDeleteContact: (name: string) => void;
}

export function ContactList({ contacts, onEditContact, onDeleteContact }: ContactListProps) {
    return (
        <div className={styleHome.contactsListContainer}>
            {contacts.length > 0 ? (
                // Se houver contatos, renderiza a lista
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
                <img src={img} alt="Lista vazia" className={stylesNoFound.noContactsIcon} />
            )} 
        </div>
    );
}

export default ContactList;
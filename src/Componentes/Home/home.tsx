// src/components/Home/Home.tsx
import React, { useState } from 'react';
import styleHome from "./home.module.css";
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar/searchBar';
import ContactHeader from './ContactHeader/contactHeader';
import ContactList from './ContactList/contactList';
import NoContactsFound from './NoContactsFounded/noContactFound';
import type { Contact } from "../../Types/types"


interface HomeProps {
    contacts: Contact[];
    onDeleteContact: (name: string) => void;
    onEditContact: (name: string) => void;
}

export function Home({ contacts, onDeleteContact, onEditContact }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  const filteredContacts: Contact[] = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.telefone.includes(searchTerm) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (contact.redeSocial && contact.redeSocial.toLowerCase().includes(searchTerm.toLowerCase())) // Adiciona busca por rede social
  );

  const handleCreateContact = (): void => {
    navigate('/MeuForm');
  };

  return (
    <div className={styleHome.homeContainer}>
      <h1 className={styleHome.homeTitle}>Meus Contatos</h1>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />

      <ContactHeader
        contactCount={filteredContacts.length}
        onCreateContact={handleCreateContact}
      />

      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onEditContact={onEditContact}
          onDeleteContact={onDeleteContact}
        />
      ) : (

        <NoContactsFound />
      )}
    </div>
  );
}

export default Home;
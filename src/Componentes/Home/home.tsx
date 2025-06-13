// src/components/Home/Home.tsx
import React, { useState, useEffect } from 'react';
import styleHome from "./home.module.css";
import { useNavigate } from 'react-router-dom';

// Importe os novos componentes
import SearchBar from './SearchBar/searchBar';
import ContactHeader from './ContactHeader/contactHeader';
import ContactList from './ContactList/contactList';

interface Contact {
  name: string;
  telefone: string;
  email: string;
}

export function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const mockContacts: Contact[] = [
      { name: 'João Silva', telefone: '11987654321', email: 'joao.s@example.com' },
      { name: 'Maria Souza', telefone: '21912345678', email: 'maria.s@example.com' },
      { name: 'Pedro Santos', telefone: '31999887766', email: 'pedro.s@example.com' },
      { name: 'Ana Oliveira', telefone: '41911223344', email: 'ana.o@example.com' },
      { name: 'Carlos Ferreira', telefone: '51955443322', email: 'carlos.f@example.com' },
      { name: 'Bruno Costa', telefone: '81987651234', email: 'bruno.c@example.com' },
    ];
    setContacts(mockContacts);
  }, []);

  const filteredContacts: Contact[] = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.telefone.includes(searchTerm) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEditContact = (name: string): void => {
    console.log(`Editar contato com o Nome: ${name}`);
  };

  const handleDeleteContact = (name: string): void => {
    if (window.confirm(`Tem certeza que deseja excluir o contato ${name}?`)) {
      setContacts(prevContacts => prevContacts.filter(contact => contact.name !== name));
      console.log(`Contato: ${name} excluído.`);
    }
  };

  const handleCreateContact = (): void => {
    console.log('Navegar para a página de criação de contatos...');
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

      <ContactList
        contacts={filteredContacts}
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default Home;
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Componentes/Header/header";
import Home from "./Componentes/Home/home";
import MeuForm from "./Componentes/ContactForm/meuForm";
import useLocalStorage from './Hooks/useLocalStorage';
import type { Contact } from "./Types/types"

function App () {
  const [contacts, setContacts] = useLocalStorage<Contact[]>("myContactsList",[]);

  // Função para ADICIONAR um novo contato
  const handleAddContact = (newContact: Contact) => {
    setContacts(prevContacts => [...prevContacts, newContact]);
    console.log('Novo contato adicionado:', newContact);
  };

  // Função para EXCLUIR um contato (passada para Home)
  const handleDeleteContact = (id: string): void => {
    if (window.confirm(`Tem certeza que deseja excluir o contato ${id}?`)) {
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
      console.log(`Contato: ${id} excluído.`);
    }
  };

  // Função para EDITAR um contato (passada para Home, apenas o esqueleto por enquanto)
  const handleEditContact = (id: string): void => {
    console.log(`Editar contato com o Nome: ${id}`);
    // Futuramente, você pode navegar para uma página de edição com o ID do contato
  };

  return (
    <>
      <Header/>
      <Routes>
        {/* Passa a lista de contatos e as funções de manipulação para o componente Home */}
        <Route
          path="/"
          element={
            <Home
              contacts={contacts}
              onDeleteContact={handleDeleteContact}
              onEditContact={handleEditContact}
            />
          }
        />
        {/* Passa a função handleAddContact para o componente MeuForm */}
        <Route
          path="/MeuForm"
          element={
            <MeuForm
              onAddContact={handleAddContact}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
import React, { useState, useEffect } from 'react'; 
import styleHome from "./home.module.css"; 
import { useNavigate } from 'react-router-dom';

  interface Contact {
    name: string;
    phone: string;
    email: string;
  }

export function Home(){ 
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();
 
      useEffect(() => {
    
        const mockContacts: Contact[] = [
          { name: 'João Silva', phone: '11987654321', email: 'joao.s@example.com' },
          { name: 'Maria Souza', phone: '21912345678', email: 'maria.s@example.com' },
          { name: 'Pedro Santos', phone: '31999887766', email: 'pedro.s@example.com' },
          { name: 'Ana Oliveira', phone: '41911223344', email: 'ana.o@example.com' },
          { name: 'Carlos Ferreira', phone: '51955443322', email: 'carlos.f@example.com' },
          { name: 'Bruno Costa', phone: '81987651234', email: 'bruno.c@example.com' },
        ];
    setContacts(mockContacts);

  }, []);

    const filteredContacts: Contact[] = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

  
    const handleEditContact = (name: string): void => {
      console.log(`Editar contato com o Nome: ${name}`);
    };

    const handleDeleteContact = (name: string): void => {
      if (window.confirm(`Tem certeza que deseja excluir o contato ?`)) {
        setContacts(prevContacts => prevContacts.filter(contact => contact.name !== name));
        console.log(`Contato: ${name} excluído.`);
      };
    };

    const handleCreateContact = (): void => {
      console.log('Navegar para a página de criação de contatos...');
        navigate('/MeuForm');
    };

    return (
      <div className={styleHome.homeContainer}>
        <h1 className={styleHome.homeTitle}>Meus Contatos</h1>

          <div className={styleHome.searchBar}>
            <input
              type="text"
              placeholder="Pesquisar por nome, telefone ou email..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className={styleHome.searchInput}
            />
          </div>

          <div className={styleHome.createContact}>
            <p className={styleHome.contactsCounter}>
              <span className={styleHome.count}>{filteredContacts.length}</span> contatos
            </p>

              <button onClick={handleCreateContact} className={styleHome.createContactButton}>
                Novo Contato
              </button>
          </div>

        {/* Lista de Contatos */}
        <div className={styleHome.contactsListContainer}>
          {filteredContacts.length > 0 ? (
            <ul className={styleHome.contactsList}>
              {filteredContacts.map((contact: Contact) => ( // Tipagem do item no map
                <li key={contact.name} className={styleHome.contactItem}>
                  <div className={styleHome.contactInfo}>
                    <h3 className={styleHome.contactName}>{contact.name} INSTAGRAM </h3>
                    <p className={styleHome.contactPhone}>Telefone: {contact.phone}</p>
                    {contact.email && <p className={styleHome.contactEmail}>Email: {contact.email}</p>}
                  </div>

                  <div className={styleHome.contactActions}>
                    <button onClick={() => handleEditContact(contact.name)} className={styleHome.actionButtonEdit}>
                      Editar
                    </button>

                    <button onClick={() => handleDeleteContact(contact.name)} className={styleHome.actionButtonDelete}>
                      Excluir
                    </button>

                  </div>

                </li>

              ))}

            </ul>

          ) : (
            <p className={styleHome.noContactsMessage}> Nenhum contato encontrado com o termo de pesquisa. </p>
          )}

        </div>

      </div>
    );
  }

export default Home;
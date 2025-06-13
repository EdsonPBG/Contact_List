import React from 'react'
import styleHome from "../home.module.css";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className={styleHome.searchBar}>
        <input 
        type="text"
        placeholder="Pesquisar por nome, telefone ou email..."
        value={searchTerm}
        onChange={onSearchChange}
        className={styleHome.searchInput}
         />
    </div>
  );
}

export default SearchBar;
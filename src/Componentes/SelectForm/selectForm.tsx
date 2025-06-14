import React from 'react'; 
import styles from "./selectForm.module.css";

interface SelectFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectForm({ value, onChange }: SelectFormProps) {
  return (
    <div className={styles.OptionsContainer}>
      <label htmlFor="redeSocialSelect">Selecione uma Rede Social</label> 
      <select
        name="redeSocial" 
        className={styles.OptionsSelect}
        value={value} // <-- Use a prop 'value' para controlar o select
        onChange={onChange} // <-- Use a prop 'onChange' para atualizar o estado no componente pai
      >
       
        {/* <option value=""></option>  */}
        <option value="Linkedin">Linkedin</option>
        <option value="GitHub">GitHub</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
        <option value="Telegram">Telegram</option>
        <option value="Other">Outro</option>
      </select>
    </div>
  );
}
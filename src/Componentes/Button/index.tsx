import React from 'react'
import { Link } from 'react-router-dom';
import style from "./style.module.css"

interface Props {
    children: React.ReactNode;
};

export default function Button ({children}: Props) {
  return (
 
      <Link to="/" className={style.home}>
        <button type='submit'  
  
          className={style.button}>{children}
        
        </button>
      </Link>
  );
};
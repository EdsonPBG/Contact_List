import ButtonBack from './buttonBack.module.css';
import logoVoltar from './img/Voltar.png';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (

    <Link to="/" className={ButtonBack.voltar}>
      <img src={logoVoltar} alt="Voltar" />
      <span className={ButtonBack.backText}></span>
    </Link>

  );
};
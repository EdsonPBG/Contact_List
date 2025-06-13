import React, { useState } from "react";
import Button from "../Button";
import SelectForm from "../SelectForm/selectForm"
import styleForm from "./contactForm.module.css";
import BackButton from "../ButtonBack/buttonBack";

export default function MeuForm() {
    const [dadosForm, setDadosForm] = useState({
        name: "",
        email: "",
        telefone: "",
        redeSocial: "", 
        linkRedeSocial: "" 
    }
);

    
    const identificador = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
            setDadosForm(prevData => ({
                ...prevData,
                [name]: value,
            }
        )
    );
};

    const submitId = (event: React.FormEvent) => {
        event.preventDefault();
            console.log('Dados do Formulário:', dadosForm);
                alert(`Contato salvo com sucesso!
                    Nome: ${dadosForm.name}
                    Telefone: ${dadosForm.telefone}`);

        setDadosForm({
            name: "",
            email: "",
            telefone: "",
            redeSocial: "",
            linkRedeSocial: ""
        }
    );
};

    return (
        <form onSubmit={submitId} className={styleForm.formContacts}>
            <div className={styleForm.inputGroup}>
                <BackButton/>
                    <label htmlFor="inputNome">Nome: </label>
                    <input
                        type="text"
                        id="inputNome" // Corrigido id
                        name="name" // Deve corresponder à chave no estado
                        placeholder="Digite seu nome aqui"
                        value={dadosForm.name}
                        onChange={identificador}
                        required
                        className={styleForm.inputField}
                    />
                </div>
            <br />

           
            <div className={styleForm.inputGroup}>
                    <label htmlFor="inputEmail">E-mail: </label>
                    <input
                        type="email" // Usar type="email" para validação nativa
                        id="inputEmail"
                        name="email"
                        placeholder="Digite seu email aqui"
                        value={dadosForm.email}
                        onChange={identificador}
                        required
                        className={styleForm.inputField}
                    />
                </div>
            <br />

           
            <div className={styleForm.inputGroup}>
                    <label htmlFor="inputTelefone">Telefone: </label>
                    <input
                        type="tel" // Usar type="tel" para telefones
                        id="inputTelefone"
                        name="telefone"
                        placeholder="Informe seu Telefone"
                        value={dadosForm.telefone}
                        onChange={identificador}
                        required
                        className={styleForm.inputField}
                    />
                </div>
            <br />
                <SelectForm/>
            <br />
             
            <Button>Cadastrar-se</Button>

        </form>
    );
};
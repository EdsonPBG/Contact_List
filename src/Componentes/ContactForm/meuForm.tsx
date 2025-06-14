import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SelectForm from "../SelectForm/selectForm";
import styleForm from "./meuForm.module.css";
import Button from "../Button";
import BackButton from "../ButtonBack/buttonBack";
import InputField from "./InputField/inputField";
import { v4 as uuidv4 } from 'uuid';
import type { Contact } from "../../Types/types"

interface MeuFormProps {
    onAddContact: (newContact: Contact) => void;
}

export default function MeuForm({ onAddContact }: MeuFormProps) {
    const [dadosForm, setDadosForm] = useState<Contact>({
        id: "", // ID inicializado vazio, mas será preenchido no submit
        name: "",
        email: "",
        telefone: "",
        redeSocial: "",
    });

    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const navigate = useNavigate();

    const checkFormValid = () => {
        const { name, email, telefone, redeSocial } = dadosForm;

        // A validação agora considera todos os campos obrigatórios
        const isValid =
            name.trim() !== "" &&
            email.trim() !== "" &&
            telefone.trim() !== "" &&
            redeSocial.trim() !== "";

        setIsFormValid(isValid);
    };

    useEffect(() => {
        // Este useEffect garante que a validação é verificada a cada mudança no formulário
        checkFormValid();
    }, [dadosForm]);

    const identificador = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        let formattedValue = value;
        if (name === "telefone") {
            formattedValue = formatPhoneNumber(value);
        }

        setDadosForm(prevData => ({
            ...prevData,
            [name]: formattedValue,
        }));
    };

    const formatPhoneNumber = (value: string) => {
        if (!value) return value;
        const phoneNumber = value.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 3) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
        }
        if (phoneNumberLength < 11) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6, 10)}`;
        }
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    };

    const submitId = (event: React.FormEvent) => {
        event.preventDefault();

        if (!isFormValid) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        const newId = uuidv4(); // Gera um ID único

        const contactToSave: Contact = {
            id: newId, 
            name: dadosForm.name,
            telefone: dadosForm.telefone,
            email: dadosForm.email, 
            redeSocial: dadosForm.redeSocial,
        };

        onAddContact(contactToSave); // Envia o novo contato para o App.tsx

        alert(`Contato salvo com sucesso!\nNome: ${dadosForm.name}\nTelefone: ${dadosForm.telefone}`);

        // Limpa o formulário após o envio
        setDadosForm({
            id: "",
            name: "",
            email: "",
            telefone: "",
            redeSocial: "",
        });

        navigate('/'); // Volta para a Home
    };

    return (
        <form onSubmit={submitId} className={styleForm.formContacts}>
            <BackButton />
            <h2>Cadastrar Novo Contato</h2>

            <InputField
                label="Nome"
                id="inputNome"
                name="name"
                type="text"
                placeholder="Digite seu nome aqui"
                value={dadosForm.name}
                onChange={identificador}
                required
            />
            <br />

            <InputField
                label="E-mail"
                id="inputEmail"
                name="email"
                type="email"
                placeholder="Digite seu email aqui"
                value={dadosForm.email}
                onChange={identificador}
                required
            />
            <br />

            <InputField
                label="Telefone"
                id="inputTelefone"
                name="telefone" // Mantido como 'telefone'
                type="tel"
                placeholder="Informe seu Telefone"
                value={dadosForm.telefone}
                onChange={identificador}
                required
            />
            <br />

            <SelectForm
                value={dadosForm.redeSocial}
                onChange={identificador}
            />
            <br />

            <Button disabled={!isFormValid}> Cadastrar </Button>
        </form>
    );
}
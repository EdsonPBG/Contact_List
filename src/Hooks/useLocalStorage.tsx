// Hooks/useLocalStorage.ts

import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Contact } from "../Types/types";

export function useLocalStorage<T>(key: string, valueInicial: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            // Se for função, chame-a; senão, use o valor direto
            return valueInicial instanceof Function ? valueInicial() : valueInicial;
        }
        try {
            const item = window.localStorage.getItem(key);
            // Se o item existir, parse-o; senão, use o valor inicial (considerando a função de inicialização)
            return item ? JSON.parse(item) : (valueInicial instanceof Function ? valueInicial() : valueInicial);
        } catch (error) {
            console.error(`Erro ao ler o LocalStorage: ${error}`);
            // Em caso de erro, retorne o valor inicial (considerando a função de inicialização)
            return valueInicial instanceof Function ? valueInicial() : valueInicial;
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(`Erro ao escrever no LocalStorage: ${error}`);
        }
    }, [key, storedValue]);
    
    return [storedValue, setStoredValue];
}

export default useLocalStorage;
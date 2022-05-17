import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const UseCalculadora = () => {
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    //utilizar un useref para mantener referencia hacia los datos
    const ultimaOperacion = useRef<Operadores>();


    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {
        //validar que no se agregue doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            //punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
            }//evaluar si viene otro cero y se incluye un punto
            else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
            }//Evaluar si es diferente de 0 y no tiene un punto
            else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            }//evitar  00000.00
            else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDelete = () => {
        let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1)); // para quitar el ultimo numero de la cadena
        } else {
            setNumero('0');
        }

    }

    //pasar el numero hacia el numero anterior
    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');

    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior('0');
    }

    return {
        numeroAnterior, numero, limpiar, positivoNegativo, btnDelete, btnDividir,
        armarNumero, btnMultiplicar, btnRestar, btnSumar, calcular
    }

}


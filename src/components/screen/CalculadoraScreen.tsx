import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { UseCalculadora } from '../../hooks/UseCalculadora';
import { styles } from '../../theme/AppTheme';
import BtnCalc from '../BtnCalc';


const CalculadoraScreen = () => {
    //llamada al custom Hook personalizado
    const { numeroAnterior, numero, limpiar, positivoNegativo, btnDelete, btnDividir, armarNumero,
        btnMultiplicar, btnRestar, btnSumar, calcular } = UseCalculadora();

    return (
        <View style={styles.containerCal} >
            {   //si el valor anterior es igual a 0 no lo muestra en pantalla
                (numeroAnterior !== '0') && (<Text style={styles.resultadoPeq}> {numeroAnterior}</Text>)
            }

            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit> {numero}</Text>

            <View style={styles.fila}>
                <BtnCalc texto='C' color={'#9b9b9b'} accion={limpiar}></BtnCalc>
                <BtnCalc texto='+/-' color={'#9b9b9b'} accion={positivoNegativo} ></BtnCalc>
                <BtnCalc texto='DEL' color={'#9b9b9b'} accion={btnDelete}></BtnCalc>
                <BtnCalc texto='/' color={'#ff9427'} accion={btnDividir}></BtnCalc>
            </View>

            <View style={styles.fila}>
                <BtnCalc texto='7' accion={armarNumero} ></BtnCalc>
                <BtnCalc texto='8' accion={armarNumero} ></BtnCalc>
                <BtnCalc texto='9' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='X' accion={btnMultiplicar} color={'#ff9427'}></BtnCalc>
            </View>

            <View style={styles.fila}>
                <BtnCalc texto='4' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='5' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='6' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='-' accion={btnRestar} color={'#ff9427'}></BtnCalc>
            </View>
            <View style={styles.fila}>
                <BtnCalc texto='1' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='2' accion={armarNumero} ></BtnCalc>
                <BtnCalc texto='3' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='+' accion={btnSumar} color={'#ff9427'}></BtnCalc>
            </View>
            <View style={styles.fila}>
                <BtnCalc texto='0' accion={armarNumero} ancho></BtnCalc>
                <BtnCalc texto='.' accion={armarNumero}></BtnCalc>
                <BtnCalc texto='=' accion={calcular} color={'#ff9427'}></BtnCalc>
            </View>

        </View>
    )
}

export default CalculadoraScreen

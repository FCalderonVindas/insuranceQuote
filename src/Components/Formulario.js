import React, {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear, obtenerMarca, obtenerPlan} from '../Helper';

    const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    `;

    const Label = styled.label`
    flex: 0 0 100px;
    `;

    const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
    `;

    const InputRadio = styled.input`
    margin: 0 1rem;
    `;

    const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{                                     //Cuando uso el hover debo hacerlo con %
        background-color: #26C6DA;
        cursor: pointer;   
    }`;

    const Error = styled.div `
        background-color: red;
        color: white;
        padding: 1rem;
        width: 100%;
        text-align: center;
        margin-bottom : 2rem;
    `;

const Formulario = ({guardarResumen, guardarCargando}) => {

    //State para guardar datos

    const [datos, guardarDatos] = useState({
        marca: '',
        year:'',
        plan:''
    });

    //State para le error

    const [error, guardarError] = useState(false);
    
    // Extraer los valores
    const {marca, year, plan} = datos;

    //Leer los datos del formulario y colocarlos en el State
    const obtenerInformacion = e =>{
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();
        
        if(marca.trim()==='' || year.trim()==='' || plan.trim ===''){
            guardarError(true);
            return;
        }
        guardarError(false);   

        //Iniciamos con una base de 2000

        let resultado = 2000;


        // Obtener la diferiencia de a??os
        
        const diferiencia = obtenerDiferenciaYear(year);
        
        // Por cada a??o hay que restar el 3% del valor

        resultado -= ((diferiencia * 3) * resultado) / 100; // con el " -= "asigno

        // Americano 15%
        // Asi??tico 5%
        // Europero 30%

        resultado = obtenerMarca(marca) * resultado;        
        console.log(resultado);

        //B??sico aumenta 20%
        //Completo 50%
        const incrementoPlan = obtenerPlan();
        resultado = parseFloat(incrementoPlan*resultado).toFixed(2);

        //Spinner
        guardarCargando(true);  

        //Total
        
        setTimeout(() => {

            guardarCargando(false);

            guardarResumen({
                cotizacion: Number(resultado),
                datos           
            })
        },3000);
    }


    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            {
                error ?
                <Error>Todos los campos son obligatorios</Error>
                : null
            }
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange= {obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">-- Americano --</option>
                    <option value="europeo">-- Europeo --</option>
                    <option value="asiatico">-- Asi??tico --</option>
                </Select>
            </Campo>
            <Campo>
                <Label>A??o</Label>
                <Select
                name="year"
                value={year}
                onChange= {obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>              
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type = "radio"
                    name = "plan"
                    value = "basico"
                    checked = {plan === "basico"}
                    onChange= {obtenerInformacion}
                />B??sico
               
                <InputRadio
                    type = "radio"
                    name = "plan"
                    value = "completo"
                    checked = {plan === "completo"}
                    onChange= {obtenerInformacion}
                />Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}
 
export default Formulario;
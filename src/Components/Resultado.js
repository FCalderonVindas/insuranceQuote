import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    font-weight: bold;
    padding: 1rem;
    text-align: center;

`;

const SmsTotal = styled.p`
    font-weight: bold;
    color: white;
    margin: 0;
    padding: 1rem;
    text-transform: uppercase ;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: green;
    margin-top: 1rem;
    position: relative;
`;

const Resultado = ({cotizacion}) => {
    return(
        (cotizacion === 0) 
        ?
        <Mensaje>Elige marca, año y tipo de seguro :</Mensaje>
        :
        (
            <ResultadoCotizacion>     
                <TransitionGroup
                    component="span"  // Le indicamos cual tiene que animar, en este caso SmsTotal que es de type "p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter: 500, exit: 500}} // Tiempo que va a tomar la animación
                    >
                        <SmsTotal>El total es: $<span> {cotizacion}</span></SmsTotal>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
    )
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado

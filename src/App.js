import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import styled from '@emotion/styled';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';
import Spinner from './Components/Spinner.js';
import PropTypes from 'prop-types';

const Contenedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorForm = styled.div `
  background-color : #ffffff;
  padding: 3rem;
`;

function App() {

  //State paa spinner

  const [cargando, guardarCargando] = useState(false);

  //Resumen

  const[resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: ''
    }
  });
  
  //Extraer datos

  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header
        titulo = 'cotizador de seguros' 
      />
      <ContenedorForm>
        <Formulario
          guardarResumen = {guardarResumen}    
          guardarCargando = {guardarCargando}    
        />
        {
        cargando ?<Spinner/>  //Si cargando está true muestro el spinner
        :null
        }
        <Resumen
            datos = {datos}
        />   

      {!cargando ?
        <Resultado
        cotizacion = {cotizacion}
        />
        : 
        null
      }
        
      </ContenedorForm>
    </Contenedor>
  )
};

Formulario.prototypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired
}



export default App;

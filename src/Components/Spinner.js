import React from 'react';
import './Spinner.css'; // Para importar el style se hace de esta forma, de otro modo marca error diciendo que ya está declarado

const Spinner = () => {
    return (  
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
}
 
export default Spinner;
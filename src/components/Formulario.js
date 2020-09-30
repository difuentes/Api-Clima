import React,{useState} from 'react';
import Error from './Error';
import PropTypes  from 'prop-types';

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

    //estate errores validacion
    const[error,guardarError] = useState(false);

    //extraer ciudad y pais
    const {ciudad,pais } = busqueda;

    //funcion que coloca los elementos en el state

    const guardarFormulario = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //cuando usuario da enviar a formulario
    const enviarFormulario = e =>{
        e.preventDefault();
       
        //validaciones
        if(ciudad.trim() ==='' || pais.trim() ===''){
            guardarError(true);
            return ;
        }
        guardarError(false)
        //enviar al componente principal
        guardarConsultar(true);

    }

    return ( 
        <form
            onSubmit={enviarFormulario}
        >
            {error ? <Error mensaje="Ambos Campos Son Obligatorios" />  : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={guardarFormulario}
                />
                 <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" onChange={guardarFormulario} value={pais}>  
                    <option value="">--Seleccionar un Pais --</option>
                    <option value="CL">Chile</option>
                    <option value="AR">Argentina</option>
                    <option value="PE">Perú</option>
                    <option value="ES">España</option>
                    <option value="CO">Colombia</option>
                </select>
                <label htmlFor="pais">Selecciona un Pais:</label>
            </div>
            <div className="input-field col s12">
                <button
                 className="waves-effect orange  btn-block waves-light btn"
                 type="submit">Enviar
                </button>
            </div>
            
        </form>
     );
}
 
Formulario.prototype = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda : PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}

export default Formulario;
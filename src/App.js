import React,{useState,useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'


function App() {

  //state formulario
  const[busqueda,guardarBusqueda] = useState({
    pais:'',
    ciudad:''
  });
  const [consultar,guardarConsultar] = useState(false);
  const [resultado,guardarResultado] = useState({});
  const [error,guardarError] = useState(false);

  //extraer ciudad y pais
  const {ciudad,pais } = busqueda;

  useEffect(()=>{
    const consumirApi = async()=> {
      if(consultar){
        const appid = 'dd331917c07d8b006789780f8e0e50b5';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`
        
        const respuesta = await fetch(url);
        const res = await respuesta.json();
        console.log(res);
        guardarResultado(res);
        guardarConsultar(false);
        //detectar si hay errores en la consulta a la api
        if(resultado.cod ==="404" ){
          guardarError(true)
        }else{
          guardarError(false);
        }

      }

    }
    consumirApi();
    // eslint-disable-next-line
  },[consultar])

  let componente;

  if(error){
    componente = <Error mensaje="no hay resultado " />
  }
  else{
    componente= <Clima
          resultado={resultado}
    />
  }

  return (
    <>
      <Header titulo="DiFuentes Api-Clima" />

      <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsultar={guardarConsultar}
                />
              </div>
              <div className="col m6 s12">
                  {componente}
              </div>
            </div>
          </div>
      </div>
    </>
    
  );
}

export default App;

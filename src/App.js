import React from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {
  return (
    <>
      <Header titulo="DiFuentes Api-Clima" />

      <div className="contenedor-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                <Formulario/>
              </div>
              <div className="col m6 s12">
                1
              </div>
            </div>
          </div>
      </div>
    </>
    
  );
}

export default App;

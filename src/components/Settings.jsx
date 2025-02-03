import React from "react";

const Settings = ({ show }) => {
  return (
    <div className="settings">
      <div className="container1">
        <div className="column">
          <div id="padelLand" className="title">
            <h1>Metaverso</h1>
          </div>
          {/* logo desactivado de momento */}
          {/* <img id="logo" className="logo" /> */}
          <button
            id="close1"
            className="button close-btn up"
            onClick={() => show(false)}
          >
            Volver
          </button>
          <button id="options" className="button options-btn up">
            Opciones
          </button>
          <button id="reset" className="button reset-btn up">
            Reset
          </button>
          <button id="closeSesion" className="button sesion-btn up">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

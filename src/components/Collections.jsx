const Collections = ({ show }) => {
  return (
    <div className="collections">
      <div className="wrapper">
        <div className="container">
          <div className="wrapper-tabs">
            <div className="meta-tabs"></div>
            <button
              className="button close-btn up close"
              onClick={() => show(false)}
            >
              X
            </button>
          </div>
          <div className="buttons-container">
            <button className="button button-action up detail">DETALLES</button>
            <button id="applyBto" className="button button-action up apply">
              APLICAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;

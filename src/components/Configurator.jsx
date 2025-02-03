import {
  IconACHead,
  IconACOutfit,
  IconACAcc,
  IconACSkin,
  IconACHair,
  IconACMale,
  IconACFemale,
  IconACSubmit,
  IconACCancel,
} from "../Functions/Icons";

const Configurator = ({ show }) => {
  return (
    <div className="configurator">
      <div className="wrapper">
        <div className="container">
          <div className="subcontainer set">
            <div className="wrapper-tabs">
              <div className="meta-tabs">
                <div className="meta-tab">
                  <input
                    type="radio"
                    name="css-tabs"
                    id="tab-body"
                    defaultChecked
                    className="meta-tab-switch"
                  />
                  <label
                    htmlFor="tab-body"
                    className="tab-label"
                    data-icon="head"
                  >
                    <IconACHead />
                  </label>
                  <div
                    id="head"
                    items="head"
                    className="tab-content down"
                  ></div>
                </div>
                <div className="meta-tab">
                  <input
                    type="radio"
                    name="css-tabs"
                    id="tab-head"
                    className="meta-tab-switch"
                  />
                  <label
                    htmlFor="tab-head"
                    className="tab-label"
                    data-icon="outfit"
                  >
                    <IconACOutfit />
                  </label>
                  <div
                    id="clothes"
                    items="outfit"
                    className="tab-content down"
                  ></div>
                </div>
                <div className="meta-tab">
                  <input
                    type="radio"
                    name="css-tabs"
                    id="tab-3"
                    className="meta-tab-switch"
                  />
                  <label
                    htmlFor="tab-3"
                    className="tab-label"
                    data-icon="accessory"
                  >
                    <IconACAcc />
                  </label>
                  <div
                    id="accessories"
                    items="accessory"
                    className="tab-content down"
                  ></div>
                </div>
                <div className="meta-tab">
                  <input
                    type="radio"
                    name="css-tabs"
                    id="tab-4"
                    className="meta-tab-switch"
                  />
                  <label htmlFor="tab-4" className="tab-label" data-icon="skin">
                    <IconACSkin />
                  </label>
                  <div
                    id="skins"
                    items="skin"
                    className="tab-content down"
                  ></div>
                </div>
                <div className="meta-tab">
                  <input
                    type="radio"
                    name="css-tabs"
                    id="tab-5"
                    className="meta-tab-switch"
                  />
                  <label htmlFor="tab-5" className="tab-label" data-icon="hair">
                    <IconACHair />
                  </label>
                  <div
                    id="hairs"
                    items="hair"
                    className="tab-content down"
                  ></div>
                </div>
              </div>
            </div>
            <div className="module name down">
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div className="subcontainer landscape">
            <div className="model"></div>
          </div>
          <div className="subcontainer actions">
            <div className="modules">
              <div className="module">
                <button
                  className="button button-l up"
                  type="gender"
                  data-target="male"
                  data-icon="male"
                >
                  <IconACMale />
                </button>
                <button
                  className="button button-l up"
                  type="gender"
                  data-target="female"
                  data-icon="female"
                >
                  <IconACFemale />
                </button>
              </div>
              <div className="portrait">
                <div className="model"></div>
              </div>
              <div className="module">
                <button
                  id="submit"
                  className="button button-action button-l up active"
                  data-icon="submit"
                >
                  <IconACSubmit />
                </button>
                <button
                  id="cancel"
                  className="button button-l up active"
                  data-icon="cancel"
                  onClick={() => show(false)}
                >
                  <IconACCancel />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;

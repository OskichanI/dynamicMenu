import Coins from "./Coins";
import Chat from "./Chat";
import Configurator from "./Configurator";
import Collections from "./Collections";
import Settings from "./Settings";
import {
  IconChat,
  IconAvaConfig,
  IconCollections,
  IconSettings,
} from "../Functions/Icons";
import { useState } from "react";

const Menu = ({ show = {} }) => {
  // Estado para controlar que submenu está visible
  const [activePanel, setActivePanel] = useState(null);

  const handleButtonClick = (type) => {
    setActivePanel((prev) => (prev === type ? null : type));
  };

  // Verifica si un componente debe ser visible
  const isVisible = (key) => show[key] !== false;

  return (
    <>
      <div className="menu">
        <div className="menu-tools">
          {isVisible("coins") && <Coins />}
          <div className="tools">
            {isVisible("chat") && (
              <button
                className="menu-item up"
                data-icon="chat"
                onClick={() => handleButtonClick("chat")}
              >
                <IconChat />
              </button>
            )}
            {isVisible("configurator") && (
              <button
                className="menu-item up"
                data-icon="configurator"
                onClick={() => handleButtonClick("configurator")}
              >
                <IconAvaConfig />
              </button>
            )}
            {isVisible("collections") && (
              <button
                className="menu-item up"
                data-icon="collections"
                onClick={() => handleButtonClick("collections")}
              >
                <IconCollections />
              </button>
            )}
            {isVisible("settings") && (
              <button
                className="menu-item up"
                data-icon="settings"
                onClick={() => handleButtonClick("settings")}
              >
                <IconSettings />
              </button>
            )}
          </div>
        </div>
        {activePanel === "chat" && isVisible("chat") && (
          <Chat show={setActivePanel} />
        )}
      </div>
      {activePanel === "configurator" && isVisible("configurator") && (
        <Configurator show={setActivePanel} />
      )}
      {activePanel === "collections" && isVisible("collections") && (
        <Collections show={setActivePanel} />
      )}
      {activePanel === "settings" && isVisible("settings") && (
        <Settings show={() => setActivePanel(null)} />
      )}
    </>
  );
};

export default Menu;

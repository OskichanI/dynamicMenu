const BASE = (path) => `${import.meta.env.VITE_DOMAIN}/metaverse/api/${path}`;
const BASE_SOCKET = `${import.meta.env.VITE_METAVERSE_SOCKET}`;
const BASE_AWS = (path, type) =>
  `${import.meta.env.VITE_AWS}/${import.meta.env.VITE_ENVIRONMENT}.${path}/${
    import.meta.env.VITE_METAVERSO
  }/${type}`;
class Endpoints {
  static API = {
    AUTH: {
      ACCESS: `${BASE("")}/`,
      SIGNUP: `${BASE("")}/`,
      SIGNIN: `${BASE("")}/`,
      GOOGLE: `${BASE("")}/`,
    },
    REST: {
      AVATAR: `${BASE("")}`,
      SHOP: `${BASE("")}`,
      USER: `${BASE("")}`,
      CONFIG: `${BASE("")}`,
      ROOM: `${BASE("")}`,
      WALLET: `${BASE("")}`,
      COINS: `${BASE("/")}`,
      PURCHASE: {
        AVATAR: `${BASE("")}`,
        ROOM: `${BASE("")}`,
      },
      BANREQUEST: `${BASE("")}`,
    },
    SOCKET: {
      IO: `${BASE_SOCKET}`,
    },
  };
  static PATHS = {
    AVATAR: {
      MODEL: `${BASE_AWS("", "")}`,
    },
    ROOM: {
      MODEL: `${BASE_AWS("", "")}`,
    },
    UI: {
      MAIN: `${BASE_AWS("", "")}`,
      CONFIG: `${BASE_AWS("", "")}`,
      SETTINGS: `${BASE_AWS("", "")}`,
      COLLECTION: `${BASE_AWS("", "")}`,
      COLLECTION2: `${BASE_AWS("", "")}`,
    },
    RESOURCES: {
      ROOMS: `${BASE_AWS("", "")}`,
    },
  };
}

export default Endpoints;

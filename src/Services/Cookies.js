export default class Cookies {
  constructor() {}

  setAuthCookie(token) {
    const tokenLength = token.length;
    const quarterLength = Math.floor(tokenLength / 4);

    const firstPart = token.slice(0, quarterLength);
    const secondPart = token.slice(quarterLength, quarterLength * 2);
    const thirdPart = token.slice(quarterLength * 2, quarterLength * 3);
    const fourthPart = token.slice(quarterLength * 3);

    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + 86400 * 1000); // Tiempo de expiración de la cookie en milisegundos

    const dotenv = window.location.hostname.split(".");
    // Verificar si la URL contiene "localhost" o "192"
    if (dotenv[0] === "localhost" || dotenv[0] === "192") {
      // Si la URL contiene "localhost", crear las cookies sin httpOnly, Secure y SameSite
      document.cookie = `_Secure-3PLPAT=${firstPart}; expires=${expirationTime.toUTCString()}; path=/;`;
      document.cookie = `_Secure-1PLPSTA=${secondPart}; expires=${expirationTime.toUTCString()}; path=/;`;
      document.cookie = `_Secure-1PLPAT=${thirdPart}; expires=${expirationTime.toUTCString()}; path=/;`;
      document.cookie = `_Secure-3PLPSTA=${fourthPart}; expires=${expirationTime.toUTCString()}; path=/;`;
    } else {
      // Si no es "localhost", establecer las cookies con httpOnly, Secure y SameSite
      document.cookie = `_Secure-3PLPAT=${firstPart}; expires=${expirationTime.toUTCString()}; path=/; Secure; HttpOnly; SameSite=Strict;`;
      document.cookie = `_Secure-1PLPSTA=${secondPart}; expires=${expirationTime.toUTCString()}; path=/; Secure; HttpOnly; SameSite=Strict;`;
      document.cookie = `_Secure-1PLPAT=${thirdPart}; expires=${expirationTime.toUTCString()}; path=/; Secure; HttpOnly; SameSite=Strict;`;
      document.cookie = `_Secure-3PLPSTA=${fourthPart}; expires=${expirationTime.toUTCString()}; path=/; Secure; HttpOnly; SameSite=Strict;`;
    }
  }

  getAuthCookie() {
    const tokenParts = {};

    // Obtener las cookies.
    const cookies = document.cookie.split(";");

    // Filtrar y almacenar las cookies que contienen las partes del token
    cookies.forEach((cookie) => {
      const trimmedCookie = cookie.trim();
      if (trimmedCookie.startsWith("_Secure-")) {
        const cookieParts = trimmedCookie.split("=");
        const cookieName = cookieParts[0];
        const cookieValue = cookieParts[1];
        tokenParts[cookieName] = cookieValue;
      }
    });

    // Reconstruir el token completo en el orden específico
    const token = [
      tokenParts["_Secure-3PLPAT"],
      tokenParts["_Secure-1PLPSTA"],
      tokenParts["_Secure-1PLPAT"],
      tokenParts["_Secure-3PLPSTA"],
    ].join("");

    return token;
  }

  deleteAuthCookie() {
    document.cookie = `_Secure-3PLPAT=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `_Secure-1PLPSTA=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `_Secure-1PLPAT=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `_Secure-3PLPSTA=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

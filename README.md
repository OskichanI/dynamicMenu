# Dynamic Menu

Este proyecto proporciona un menú dinámico desarrollado con React y Vite. Incluye varias funcionalidades y componentes que permiten una experiencia de usuario interactiva y personalizable.

## Funcionalidades Principales

- **Menú Dinámico**: Un menú interactivo que permite la navegación entre diferentes secciones.
- **Chat en Tiempo Real**: Un componente de chat que permite la comunicación en tiempo real.
- **Configurador de Avatares**: Un configurador que permite a los usuarios personalizar sus avatares.
- **Colecciones**: Una sección para gestionar y visualizar colecciones de elementos.
- **Ajustes**: Un componente para gestionar las configuraciones del usuario.

## Estructura del Proyecto

```plaintext
dynamicMenu/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── public/
│   ├── .DS_Store
│   └── ...
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── Chat.jsx
│   │   ├── Collections.jsx
│   │   ├── Configurator.jsx
│   │   ├── Menu.jsx
│   │   └── Settings.jsx
│   ├── Data/
│   │   └── Icons.json
│   ├── Functions/
│   │   └── Icons.jsx
│   ├── main.jsx
│   ├── Services/
│   │   ├── Api.js
│   │   ├── Cookies.js
│   │   ├── Endpoints.js
│   │   └── Socket.js
│   └── styles/
│       ├── Button.css
│       ├── Chat.css
│       ├── Collections.css
│       ├── Colors.css
│       ├── Configurator.css
│       ├── Menu.css
│       ├── Panel.css
│       ├── Settings.css
│       └── Vars.css
└── vite.config.js
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd dynamicMenu
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run build`: Construye la aplicación para producción.
- `npm run lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `npm run preview`: Previsualiza la aplicación construida.

## Uso

Para iniciar el proyecto en modo de desarrollo, ejecuta:

```bash
npm run dev
```

Esto abrirá la aplicación en http://localhost:3000.

## Elementos en Desarrollo

- **Conexión de Datos**: Algunos componentes, como el configurador de avatares y las colecciones, están a la espera de ser conectados con los datos correctos.
- **Integración de API**: La integración completa con las APIs definidas en Endpoints aún está en progreso.
- **Validación de Formularios**: La validación de formularios en componentes como Login está en desarrollo.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

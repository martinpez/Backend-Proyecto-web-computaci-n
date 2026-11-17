# Backend - Plataforma Web de Aplicaciones Móviles

Servicio backend desarrollado con **Node.js**, encargado de proporcionar la información y las direcciones URL necesarias para la descarga de aplicaciones móviles desde la plataforma web.

Este componente forma parte de una solución de software dividida en dos repositorios independientes, permitiendo separar la lógica del servidor de la interfaz de usuario.

## Arquitectura del proyecto

La solución está compuesta por los siguientes componentes:

| Componente | Responsabilidad | Repositorio |
|---|---|---|
| Frontend | Presentación de la información e interacción con los usuarios. | [Frontend](https://github.com/martinpez/Frontend-Proyecto-web-computacion) |
| Backend | Gestión y suministro de las URL de descarga de las aplicaciones móviles. | [Backend](https://github.com/martinpez/Backend-Proyecto-web-computaci-n) |

**Repositorio relacionado:**

[Consultar código fuente del Frontend](https://github.com/martinpez/Frontend-Proyecto-web-computacion)

## Tecnologías

- **Node.js:** entorno de ejecución de JavaScript en el servidor.
- **JavaScript:** implementación de la lógica del backend.
- **npm:** gestión de dependencias.
- **Docker:** soporte para contenerización mediante Dockerfile.

## Estructura del proyecto

```text
Backend-Proyecto-web-computaci-n/
│
├── node_modules/
├── .gitignore
├── Dockerfile
├── package.json
├── package-lock.json
└── server.js
```

| Archivo | Responsabilidad |
|---|---|
| `server.js` | Punto de entrada de la aplicación backend. |
| `package.json` | Configuración del proyecto y dependencias. |
| `package-lock.json` | Control de versiones de las dependencias. |
| `Dockerfile` | Configuración para la construcción de una imagen Docker. |
| `.gitignore` | Archivos y directorios excluidos del control de versiones. |

## Requisitos

- Node.js.
- npm.
- Git.
- Docker (opcional, para trabajar con la contenerización).

## Instalación y ejecución

Clona el repositorio:

```bash
git clone https://github.com/martinpez/Backend-Proyecto-web-computaci-n.git
```

Ingresa al directorio:

```bash
cd Backend-Proyecto-web-computaci-n
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor:

```bash
node server.js
```

## Integración con el Frontend

El backend proporciona los recursos que necesita el frontend para presentar y facilitar el acceso a las aplicaciones móviles.

La comunicación entre ambos componentes permite mantener separadas las responsabilidades de presentación y procesamiento del servidor.

**Frontend - Proyecto Web de Computación:**

https://github.com/martinpez/Frontend-Proyecto-web-computacion

## Contenerización

El proyecto incluye un archivo `Dockerfile` para facilitar su despliegue mediante contenedores.

## Autor

**Martín Pérez**

Desarrollador de software | Ingeniería de Sistemas

[GitHub](https://github.com/martinpez)

---

*Proyecto académico de desarrollo web y computación.*

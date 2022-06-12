# CMYK 5 Starter

Proyecto starter para los equipos participantes de la iniciativa CMYK 5, de [FrontendCafé](https://frontend.cafe).

## Estructura del proyecto

* `/backend`: Contiene un servidor de NodeJS + Express.
* `/frontend`: Contiene un frontend minimalista basado en React. Incluye módulos de autenticación, registro y administración de usuarios.

## Scripts

* `start`: Compilar el proyecto de frontend y lo sirve vía el servidor de Express.
  * Si no se especifica un puerto en variables de entorno, por defecto se utiliza el puerto `3000`.
* `dev`: Sirve el cliente y el servidor, con hot reload, para desarrollo local.
  * Puerto por defecto del cliente: `3000`.
  * Puerto por defecto del servidor: `4000`.

### Créditos
Este proyecto starter utiliza como base parte del proyecto [react-signup-verification-boilerplate](https://jasonwatmore.com/post/2020/04/22/react-email-sign-up-with-verification-authentication-forgot-password), desarrollado por Jason Watmore ([@cornflourblue](https://github.com/cornflourblue)).

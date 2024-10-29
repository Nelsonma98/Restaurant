<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Postgres (Docker)

```bash
$ docker-compose up -d
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Información
Esta API permite gestionar restaurantes, clientes y órdenes, estableciendo relaciones entre ellos para gestionar la capacidad de clientes en cada restaurante y gestionar las órdenes asociadas a ellos. Además de los clientes y restaurantes, la API permite crear órdenes, vinculándolas con una relación específica entre cliente y restaurante.

### Documentación

Para facilitar el uso y comprensión de la API, se dispone de la siguiente documentación y herramientas:

1. **Colección de Postman** : La API cuenta con una colección de Postman que permite realizar todas las peticiones disponibles, facilitando la interacción con los endpoints sin necesidad de configurarlos manualmente. Puedes importar esta colección en Postman y utilizarla para probar los diferentes métodos de la API.
2. http://localhost:3000/swagger. A través de esta interfaz, puedes explorar todos los endpoints de la API, revisar las especificaciones de cada uno y probarlos directamente desde el navegador.


### Caracteristicas

- **Gestión de Restaurantes** : Permite crear, actualizar y eliminar restaurantes, definiendo su capacidad máxima.
- **Gestión de Clientes** : Posibilidad de crear, actualizar y eliminar clientes.
- **Gestión de Órdenes** : La API permite realizar operaciones CRUD completas (crear, leer, actualizar y eliminar) sobre las órdenes. Cada orden contiene una descripción y está vinculada a una relación específica entre un cliente y un restaurante, permitiendo un seguimiento detallado de las órdenes realizadas en cada restaurante y por cada cliente.
- **Relaciones entre Clientes y Restaurantes** : Controla la asociación entre clientes y restaurantes, respetando la capacidad de cada restaurante. Un restaurante no podrá exceder su capacidad máxima de clientes.

La API está diseñada para facilitar la gestión de estos elementos con reglas de negocio claras, asegurando que un restaurante no pueda exceder su capacidad de clientes permitidos y que cada orden esté adecuadamente vinculado a una relación cliente-restaurante.
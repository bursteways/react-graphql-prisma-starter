# Fullstack React/GQL/Prisma
The purpose of this app is to help get up and running quickly using modern technologies.

### Tech stack

---

| Backend        |
| ------------- |
| Prisma      |
| GraphQL |
| Express |

| Web        |
| ------------- |
| React      |
| Material UI |
| StyledComponents |

| Mobile (coming soon)        |
| ------------- |
| React Native      |

## Getting started

### Backend setup:
###### In directory => packages/api
1. #### Globally install Prisma
```bash
$ yarn --global prisma
```
or
```bash
$ npm install -g prisma
```

2. #### Grant permission to Prisma
```bash
$ primsa login
``` 
3. #### Initialize Prisma
```bash
$ prisma init
-- Note: To get started you may want to use the demo database that comes with Prisma. It's a great way to get up and running.
For production, it is recommended to set up a full database.
-- Choose TS Prisma-client bindings when prompted in CLI
```

The CLI should have created 2 files at the root of `/packages/api`:
- datamodel.prisma
- prisma.yml

4. #### Set up your environment variables
- Follow the `Action Item` in `sample.prisma.yml`.

5. #### Deploy the Prisma schema
```bash
$ yarn run deploy
```

### Frontend setup:
###### In directory => / (Root of the project)
1. Install all the project's dependencies.
```bash
$ yarn install
```
Because this is a monorepo, we use `yarn workpaces` to handle all dependencies.

### Start the app:
###### In directory => / (Root of the project)
```bash
$ yarn start
```

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

| Mobile        |
| ------------- |
| React Native      |

## Getting started

### Backend setup:
- #### Globally install Prisma
###### packages/api
```bash
$ yarn --global prisma
```
or
```bash
$ npm install -g prisma
```

- #### Grant permission to Prisma
```bash
$ primsa login
``` 
- #### Initialize Prisma
###### packages/api
```bash
$ prisma init
-- DO NOT GENERATE PRISMA CLIENT IF ASKED DURING CLI 
```
*Note:* To get started you may want to use the demo database that comes with Prisma. It's a great way to get up and running.
For production, it is recommended to set up a full database.

The CLI should have created 2 files at the root of `/packages/api`:
- datamodel.prisma
- prisma.yml

- #### Set up your environment variables
###### /packages/api/
Follow the `Action Item` in `sample.prisma.yml`.

- #### Deploy the Prisma schema
###### /packages/api
```bash
$ yarn run deploy
```

### Frontend setup:
- Install all the project's dependencies.
###### / (Root of the project)
```bash
$ yarn install
```
Because this is a monorepo, we use `yarn workpaces` to handle the dependencies.

### Start the app
###### /
```bash
$ yarn start
```

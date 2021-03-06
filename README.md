# User rest API lab test

- Install dependencies first, run `yarn` or `yarn install`
- Create an .env file in the root directory & follow the `.env.example`, get env keys from @Asher
- To start the server in development, run `yarn dev`
- To start a production server, run `yarn build` & `yarn start`

### Any changes regarding to SQL can be done in the `prisma` folder

- Contact @Asher if you encounter any problems

## Tech Stack

- Node / Express
- TypeScript
- Postgresql
- Prisma
- Heroku

## Endpoints
- GET     `/api/users`     - All users
- GET     `/api/user/:id`  - Single user
- POST    `/api/user`      - Create user
- PUT     `/api/user/:id`  - Update user
- DELETE  `/api/user/:id`  - Delete user

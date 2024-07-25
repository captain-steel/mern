# MERN

## MongoDB | Express | React | Node.js

You can use Docker Compose to install MongoDB locally.
To do this run this commandes at the root directory

- docker-compose up --build -d mongodb
- docker-compose up

To access MongoDB console shell, you can use **`> docker exec -it mongodb bash`**

This repo uses yarn workspaces
https://classic.yarnpkg.com/en/docs/workspaces/

To install all the packages, please run (at the root folder):

- yarn install

## Backend (Node.js | Express | MongoDB)

- yarn start
- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Frontend (React | Formik | Material-UI)

- yarn start
- open [http://localhost:8000](http://localhost:8000) to view it in the browser. You can change the **port** in the /frontend/.env file


:warning: 	__**Important**__ :warning:

This repo uses some VSCode extensions. It's highly recommended to install them.

| Extension | Link |
|-----------|------|
| <img src="https://github.com/captain-steel/mern/blob/master/images/babel.svg" alt="BABEL" width="100"/> | [BABEL](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel) |
| <img src="https://github.com/captain-steel/mern/blob/master/images/editorconfig.png" alt="EditorConfig" width="100"/> | [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) |
| <img src="https://github.com/captain-steel/mern/blob/master/images/eslint.svg" alt="ESLint" width="100"/> | [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) |
| <img src="https://github.com/captain-steel/mern/blob/master/images/prettier.png" alt="Prettier" width="100"/> | [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) |

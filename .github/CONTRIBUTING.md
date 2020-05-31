# Getting Started
1. Fork the repository.
2. Clone the repository:
```
$ git clone git@github.com:Dapp3rCraft/jazz-bot.git
```
3. Install the required dependencies & make sure yarn is installed:
```
$ npm i -g yarn
$ yarn install
```
4. Create a `.env` file under the project directory.
5. Insert the following into the `.env`
```
TOKEN=<YOUR_BOT_TOKEN>
```
6. Start your bot:
```
$ yarn start
```
7. Before you commit:
```
$ yarn test
$ yarn lint
```

## Making Commits
Commit message format:
```
$ git commit -m "<type>: <subject>"
```

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Adding Features
1. Create your feature branch:
```
$ git checkout -b feature/feature-name
```
For example:
```
$ git checkout -b feature/queue-command
```
2. Commit your changes.
3. Create a pull request.

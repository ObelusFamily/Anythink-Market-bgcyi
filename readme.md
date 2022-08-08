# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

- (Install Docker)[https://docs.docker.com/get-docker/]
- Verify Docker is installed correctly by running `docker -v` and `docker-compose -v` in your terminal
- Run `docker-compose up` in the root directory of this project to load the frontend and backend. This may take a few minutes.
- Once docker finished spinning up, you can test that the backend is running by visiting http://localhost:3000/api/ping
- Finally, you should be able to access the website at http://localhost:3001/register and create an account
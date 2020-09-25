# MyDash Client

Frontend client for MyDash app. 

## Set up locally

Complete the following steps to setup locally:

1. Clone this repository to your local machine `git clone https://github.com/soriaj/mydash-client.git <NEW-PROJECTS-NAME>`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
3. Install the node dependencies `npm install`
4. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
5. Edit `.env` file and add server endpoint address and weather app api key
6. Run `npm install`
7. To start enter `npm run start`

## Run with Docker ![docker](src/img/docker-logo.png?raw=true "Docker Logo")

1. You'll need to have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your system
2. Create a directory of your choosing (example: mydash)
3. `cd` into the directory
4. Follow steps 1 thru 6 from the Setup locally section above
5. You'll need to clone the backend server (mydash-server) as well. [Click here to access server repository](https://github.com/soriaj/mydash-server)
6. Follow steps 1 thru 6 from the mydash-server repository
7. `cd` back to the root mydash directory
8. Rename example-docker-compose.yml to <strong>docker-compose.yml</strong>
9. Edit the docker-compose file with the volume path for the mydash-client and optionally the volume path for the postgres to use the seed data 
10. Add the path for the env_file path in the mydash-server service
13. From the project root directory run docker-compose up -d
12. Once the containers complete building and are running, check with `docker ps -a`, connect to the <strong>mydash-server</strong> container with `docker container exec -it mydash-server /bin/sh`
13. Migrate the database by running `npm run migrate`
14. Launch your prefered browswer and navigate to `http://localhost:3000` and signup.

## Screenshots

Desktop/Laptop: 

![landing screen](src/img/mydash-desktop.png?raw=true "Landing-Page-Full")

![dashboard screen](src/img/mydash-dashboard-desktop.png?raw=true "Dashbaord-Page-Full")

Mobile:

![landing screen](src/img/mydash-mobile.png?raw=true "Landing-Page-Mobile")

![landing screen](src/img/mydash-dashboard-mobile.png?raw=true "Landing-Page-Mobile")

## Technologies
- React
- JavaScript
- HTML5
- CSS

## Testing 
- React test
- Enzyme

## Live App

- [MyDash](https://mydash.now.sh/)

## Author

* **Javier Soria**
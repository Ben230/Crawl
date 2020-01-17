# Crawl
Crawl is a pub crawl planning app! Use our app here https://crawl.now.sh/

Created by as part of our final project at Makers Academy!

## Tech stack
### Application
We use React and Next.js to build a full stack JS application
MongoDB for our database
Travis CI and deployed in Now

### Testing
JEST and Enzyme for unit tests
Cypress for functional tests

## Set up for local build

clone this repo and install dependencies:
`npm install`

### Mongo DB
setup a new mongodb database with a user and password here - https://cloud.mongodb.com/

### Google Maps key
Set up a google maps account and project to get an API key here - https://developers.google.com/maps/documentation

### Env Config
Set a `.env` and `.env.build` file at the project root with the following values

```
GOOGLE_MAPS_API_KEY_CLIENT=<YOUR KEY HERE>
GOOGLE_MAPS_API_KEY_SERVER=<YOUR KEY HERE>
DB_LINK=<YOUR DB LINK HERE>
DB_USER=<YOUR USER HERE>
DB_PASSWORD=<YOUR PASSWORD HERE>
```


### Now 
in order to run via Now, install now CLI on your local dev machine -
https://zeit.co/download

Start the project by running `now dev`


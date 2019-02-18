
# API & Q-server & React Lab
## API useage charg


### Q-Server
* [Q_SERVER backend](https://q-server-api-lab-hi.herokuapp.com/)
* [q-server git repo](https://github.com/hingham/q-server-api-app) 

#### API 
* [API heroku backend](https://api-lab-api-server.herokuapp.com/api/v1/teams)
[api git repo](https://github.com/hingham/api-q-server/pull/1)

[Sandbox React App](https://codesandbox.io/s/0m8827nvrp)


## Using API Database: 

#### Using Mongo Database with API Server
 - `show dbs`
 - `use collection`
 - `db.schema.find()`

Example for teams:
- `show dbs`
- `use baseball`
- `db.teams.find().pretty()`


### API Database Sample Post: 
`echo '{"name":"trial"}' | http --verify=no post https://api-lab-api-server.herokuapp.com/api/v1/teams`

#### Example posting to teams:
`echo '{"name":"trial"}' | http post :3000/api/v1/teams`

### Modules:
#### API:
* index - starts server, creates global Q, updates the number of pings on a timeout function (every hour)
* publish.js - Q Class, methods for global Q
* players.js & teams.js - shema for the different models
* mongo.js - opperates CRUD on the API, calls published on the Q and passes payload

#### Q - Server
* server.js - creates a new Q called database & monitors CRUD events
* q-server/lib/server.js - starts server, connects to sockets, emits trigger with payload to the sandbox



### Dependencies:
* See package.json for dependencies
* Note usaage of `react-chartjs-2` in React App to render chart








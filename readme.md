
#### Using Database
show dbs
use collection
db.schema.find()

show dbs
use baseball
db.teams.find().pretty()

Q_SERVER backend: `https://q-server-api-lab-hi.herokuapp.com/`
[q-server git repo](https://github.com/hingham/q-server-api-app) 

API heroku backend: `https://api-lab-api-server.herokuapp.com/api/v1/teams`
[api git repo](https://github.com/hingham/api-q-server/pull/1)

Sandbox React App: `https://codesandbox.io/s/0m8827nvrp`

sample post: 

#### Using heroku backend: 
`echo '{"name":"trial"}' | http --verify=no post https://api-lab-api-server.herokuapp.com/api/v1/teams`

#### Using local backend: 
`echo '{"name":"trial"}' | http post :3000/api/v1/teams`




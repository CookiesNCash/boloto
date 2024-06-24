# boloto

## dev 1 - Запускается сразу всё

1. create .env (take data from .env.example)
2. make build-dev

## dev 2 - Запуск по частям

1. make bd-dev (из корня)
2. cd server
3. create .env (take data from .env.example) in server
4. make dev (server)
5. cd ../client
6. create .env (take data from .env.example) in client
7. npm run dev (client)

## prod 1 - Запускается сразу всё

1. create .env (take data from .env.example)
2. make build-prod

## prod 2 - Запуск по частям

1. git clone https://github.com/CookiesNCash/boloto.git
2. install docker
3. install nodejs and npm
4. install nest - npm install -g @nestjs/cli
5. npm ci on server and client
5. .env - root
6. make build-prod-server
7. .env - client
8. make build-prod-client

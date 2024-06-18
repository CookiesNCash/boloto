build:
	docker compose -f docker-compose.yml build
	docker compose -f docker-compose.yml up

# Команда для установки зависимостей в server и client
install:
	cd server && npm ci
	cd client && npm ci

# Команда для запуска миграций базы данных на сервере
migrate:
	cd server && make migrate-dev

# Команда для запуска разработки server и client
start:
	cd client && make dev &
	cd server  && make dev


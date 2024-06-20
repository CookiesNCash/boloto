build-prod:
	cd server && npm run build
	docker compose -f docker-compose.prod.yml build
	docker compose -f docker-compose.prod.yml up

build-dev:
	docker compose -f docker-compose.dev.yml build
	docker compose -f docker-compose.dev.yml up

bd-dev:
	docker compose -f docker-compose.bd-dev.yml build
	docker compose -f docker-compose.bd-dev.yml up


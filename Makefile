build-prod-server:
	cd server && npm run build
	docker compose -f docker-compose.prod.yml build
	docker compose -f docker-compose.prod.yml up

build-prod-client:
	cd client && npm run build && npm run start

build-dev:
	docker compose -f docker-compose.dev.yml build
	docker compose -f docker-compose.dev.yml up

bd-dev:
	docker compose -f docker-compose.bd-dev.yml build
	docker compose -f docker-compose.bd-dev.yml up

# > /dev/null 2>&1 &


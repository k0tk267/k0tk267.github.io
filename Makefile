.PHONY: run down enter

run:
	docker-compose up -d

down:
	docker-compose down

enter:
	docker-compose exec web sh
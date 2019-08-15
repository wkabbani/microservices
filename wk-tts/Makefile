build:
	GOOS=linux go build -o app
	docker build -t wka4docker/tts .
	rm -f app

run:
	docker run --rm -p 8080:8080 wka4docker/tts
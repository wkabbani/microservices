package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/braintree/manners"
)

func main() {
	var (
		httpAddr   = flag.String("http", "0.0.0.0:8080", "HTTP service address.")
		healthAddr = flag.String("health", "0.0.0.0:8081", "Health service address.")
	)
	flag.Parse()

	errChan := make(chan error, 10)

	// setup main server
	mux := http.NewServeMux()
	mux.HandleFunc("/api/v1/login", loginHandler)
	mux.HandleFunc("/api/v1/version", versionHandler)
	mainServer := manners.NewServer()
	mainServer.Addr = *httpAddr
	mainServer.Handler = loggingHandler(mux)

	go func() {
		errChan <- mainServer.ListenAndServe()
	}()

	// setup health server
	hmux := http.NewServeMux()
	hmux.HandleFunc("/api/v1/health", healthHandler)
	hmux.HandleFunc("/api/v1/readiness", readinessHandler)
	healthServer := manners.NewServer()
	healthServer.Addr = *healthAddr
	healthServer.Handler = loggingHandler(hmux)

	go func() {
		errChan <- healthServer.ListenAndServe()
	}()

	signalChan := make(chan os.Signal, 1)
	signal.Notify(signalChan, syscall.SIGINT, syscall.SIGTERM)

	for {
		select {
		case err := <-errChan:
			if err != nil {
				log.Fatal(err)
			}
		case s := <-signalChan:
			log.Println(fmt.Sprintf("Captured %v. Exiting...", s))
			setReadinessStatus(http.StatusServiceUnavailable)
			mainServer.BlockingClose()
			os.Exit(0)
		}
	}
}

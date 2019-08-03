package main

import (
	"net/http"
	"sync"
)

var (
	healthStatus    = http.StatusOK
	readinessStatus = http.StatusOK
	mu              sync.RWMutex
)

func getHealthStatus() int {
	mu.RLock()
	defer mu.RUnlock()
	return healthStatus
}

func getReadinessStatus() int {
	mu.RLock()
	defer mu.RUnlock()
	return readinessStatus
}

func setHealthStatus(status int) {
	mu.Lock()
	healthStatus = status
	mu.Unlock()
}

func setReadinessStatus(status int) {
	mu.Lock()
	readinessStatus = status
	mu.Unlock()
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(getHealthStatus())
}

func readinessHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(getReadinessStatus())
}

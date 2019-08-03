package main

import (
	"encoding/json"
	"net/http"
)

const (
	authServiceVersion = "1.0.0"
)

type versionResponse struct {
	Version string `json:"version"`
}

func versionHandler(w http.ResponseWriter, r *http.Request) {
	response := versionResponse{
		Version: authServiceVersion,
	}
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

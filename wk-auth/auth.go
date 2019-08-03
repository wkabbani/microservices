package main

import (
	"encoding/json"
	"errors"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const (
	hardcodedUsername   = "magicuser"
	hardcodedPassword   = "magicpassword"
	hmacHardcodedSecret = "magicsecret"
)

type loginResponse struct {
	Token string `json:"token"`
}

type loginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func (request *loginRequest) isValid() error {
	switch {
	case len(request.Username) == 0:
		return errors.New("username is required")
	case len(request.Password) == 0:
		return errors.New("password is required")
	default:
		return nil
	}
}

func checkCredentials(username string, password string) error {
	if username != hardcodedUsername || password != hardcodedPassword {
		return errors.New("username or password is not correct")
	}
	return nil
}

func loginHandler(w http.ResponseWriter, r *http.Request) {

	// JSON decode body
	var request loginRequest
	_ = json.NewDecoder(r.Body).Decode(&request)

	// validate request
	if err := request.isValid(); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// check credentials
	if err := checkCredentials(request.Username, request.Password); err != nil {
		http.Error(w, "invalid credentials", http.StatusUnauthorized)
		return
	}

	// create the token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"exp": time.Now().Add(time.Hour * 72).Unix(),
		"iss": "wk.auth.service",
		"iat": time.Now().Unix(),
		"sub": request.Username,
	})

	// sign the token
	tokenString, err := token.SignedString([]byte(hmacHardcodedSecret))
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}

	// return token
	response := loginResponse{
		Token: tokenString,
	}
	json.NewEncoder(w).Encode(response)
}

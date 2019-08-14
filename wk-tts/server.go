package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"os/exec"

	pb "github.com/wkabbani/microservices/wk-tts/tts"
)

type myTTSServer struct {
}

func (s *myTTSServer) TTS(ctx context.Context, text *pb.Text) (*pb.Speech, error) {
	fmt.Printf("Processing new request: %s\n", text.Text)

	f, err := ioutil.TempFile("", "")
	if err != nil {
		return nil, fmt.Errorf("could not create temp file")
	}
	if err := f.Close(); err != nil {
		return nil, fmt.Errorf("could not close the file %s with error %v", f.Name(), err)
	}

	cmd := exec.Command("flite", "-t", text.Text, "-o", f.Name())
	if data, err := cmd.CombinedOutput(); err != nil {
		return nil, fmt.Errorf("flite failed: %s with error: %v", data, err)
	}

	data, err := ioutil.ReadFile(f.Name())
	if err != nil {
		return nil, fmt.Errorf("could not read data back from the file: %s with error %v", f.Name(), err)
	}

	return &pb.Speech{Audio: data}, nil
}

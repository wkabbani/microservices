package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	pb "github.com/wkabbani/microservices/wk-tts/tts"

	"google.golang.org/grpc"
)

func main() {
	port := flag.Int("p", 8080, "port to listen to")
	flag.Parse()

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	fmt.Printf("gRPC server is listening on port: %d\n", *port)

	grpcServer := grpc.NewServer()
	pb.RegisterTextToSpeechServer(grpcServer, &myTTSServer{})
	err = grpcServer.Serve(lis)
	if err != nil {
		log.Fatalf("Could not server: %v", err)
	}
}
